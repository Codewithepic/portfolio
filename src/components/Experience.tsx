import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Heart, Trophy, Users, Milestone } from "lucide-react";
import { experience, achievements, timeline } from "@/lib/data";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Rocket, Users as UsersIcon, Trophy as TrophyIcon } from "lucide-react";

const typeIcons = {
  Competition: Trophy,
  Leadership: Users,
  Community: Heart,
};

const timelineIcons = {
  GraduationCap: GraduationCap,
  Trophy: TrophyIcon,
  Users: UsersIcon,
  Rocket: Rocket,
};

const typeColors = {
  Competition: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950",
  Leadership: "text-blue-600 bg-blue-50 dark:bg-blue-950",
  Community: "text-green-600 bg-green-50 dark:bg-green-950",
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience & Achievements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional journey, leadership roles, and key accomplishments.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Experience & Achievements Column */}
          <div className="space-y-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-blue-500" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold">{exp.role}</h4>
                          <p className="text-blue-600">{exp.organization}</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1.5 text-sm">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-500" />
                Key Achievements
              </h3>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {achievements.map((achievement, index) => {
                    const Icon = typeIcons[achievement.type as keyof typeof typeIcons];
                    const colorClass = typeColors[achievement.type as keyof typeof typeColors];

                    return (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow h-full">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                              <div className={`p-3 rounded-full ${colorClass} mb-4`}>
                                <Icon className="h-6 w-6" />
                              </div>
                              <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {achievement.description}
                              </p>
                              <Badge variant="secondary" className="text-xs">
                                {achievement.date}
                              </Badge>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </div>

          {/* Journey Timeline Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Milestone className="h-6 w-6 text-green-500" />
              My Journey Timeline
            </h3>
            <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              {timeline.map((item, index) => {
                const Icon = timelineIcons[item.icon as keyof typeof timelineIcons];
                return (
                <motion.div 
                  key={index} 
                  className="mb-10 ml-4"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={timelineItemVariants}
                >
                  <div className="absolute -left-3.5 mt-1.5 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white ring-8 ring-white dark:ring-black">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">{item.date}</p>
                    <h4 className="text-md font-bold mt-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              )})}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}