import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Clock, CheckCircle } from "lucide-react";
import { projects } from "@/lib/data";
import { useInView } from "framer-motion";

const statusIcons = {
  "Hackathon Winner": Trophy,
  "4th Runner-up": Trophy,
  Winner: Trophy,
  Production: CheckCircle,
  Development: Clock,
  Complete: CheckCircle,
  Live: CheckCircle,
};

const statusColors = {
  "Hackathon Winner": "text-yellow-500 bg-yellow-500/10",
  "4th Runner-up": "text-orange-500 bg-orange-500/10",
  Winner: "text-green-500 bg-green-500/10",
  Production: "text-blue-500 bg-blue-500/10",
  Development: "text-purple-500 bg-purple-500/10",
  Complete: "text-green-500 bg-green-500/10",
  Live: "text-emerald-500 bg-emerald-500/10",
};

const ProjectCard = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const StatusIcon = statusIcons[project.status as keyof typeof statusIcons];
  const statusColorClass = statusColors[project.status as keyof typeof statusColors];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-px shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full rounded-xl bg-white dark:bg-gray-800 p-6"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>

        <div className="flex items-center justify-between text-sm mb-4">
          {StatusIcon && (
            <Badge className={`flex items-center gap-1.5 ${statusColorClass} border-0`}>
              <StatusIcon className="h-4 w-4" />
              {project.status}
            </Badge>
          )}
          <span className="text-gray-500 dark:text-gray-400">{project.date}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-base mb-4 h-24">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Latest Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of innovative solutions spanning cybersecurity, blockchain, AI, and modern web development.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}