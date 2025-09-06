import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Blocks, Brain, Code, ChevronRight } from "lucide-react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillIcons = {
  "Cyber Security": Shield,
  "Blockchain": Blocks,
  "AI/ML": Brain,
  "Web Development": Code,
};

const skillGradients = {
  "Cyber Security": "from-red-500 to-pink-500",
  "Blockchain": "from-blue-500 to-cyan-500",
  "AI/ML": "from-purple-500 to-indigo-500",
  "Web Development": "from-green-500 to-emerald-500",
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 hover:scale-105 transition-transform">Skills & Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I Do Best
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized expertise across cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([category, skillList], index) => {
            const Icon = skillIcons[category as keyof typeof skillIcons];
            const gradient = skillGradients[category as keyof typeof skillGradients];
            
            return (
              <motion.div
                key={category}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full">
                  <motion.div 
                    className={`h-2 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                  />
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <motion.div 
                        className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${gradient} p-0.5 mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                          <Icon className="h-7 w-7 text-gray-700 dark:text-gray-300" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex} 
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                          initial={{ x: -20, opacity: 0 }}
                          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                          transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                          whileHover={{ x: 5, scale: 1.05 }}
                        >
                          <ChevronRight className="h-3 w-3" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Proficiency */}
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Python", level: 90, color: "bg-blue-500" },
              { name: "JavaScript/TypeScript", level: 85, color: "bg-yellow-500" },
              { name: "Solidity", level: 80, color: "bg-purple-500" },
              { name: "React/Next.js", level: 85, color: "bg-cyan-500" },
              { name: "Cybersecurity Tools", level: 90, color: "bg-red-500" },
              { name: "Machine Learning", level: 75, color: "bg-green-500" },
            ].map((tech, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{tech.name}</span>
                  <motion.span 
                    className="text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    {tech.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className={`${tech.color} h-2 rounded-full`}
                    variants={progressVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={tech.level}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Competencies */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Event Management", "Public Speaking", "Team Leadership", "Project Management",
              "Technical Writing", "Mentoring", "Innovation Strategy", "Community Building"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}