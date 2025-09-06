import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Milestone, Zap } from "lucide-react";
import { experience, timeline } from "@/lib/data";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Rocket, Users as UsersIcon, Trophy as TrophyIcon } from "lucide-react";

const timelineIcons = {
  GraduationCap: GraduationCap,
  Trophy: TrophyIcon,
  Users: UsersIcon,
  Rocket: Rocket,
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
  };

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Professional Journey
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience & Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive view of my professional journey and the milestones that have 
            shaped my expertise in technology and community leadership.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Professional Experience */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">Building expertise through leadership</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Border Animation */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 rounded-lg transition-all duration-500" />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="space-y-2">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {exp.role}
                            </h4>
                            <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {exp.organization}
                            </p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800"
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {exp.description}
                        </p>
                        
                        {/* Hover Effect Icon */}
                        <motion.div
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                          animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Zap className="h-6 w-6 text-blue-500" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Journey Timeline */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <Milestone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey Timeline</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Key milestones</p>
              </div>
            </div>
            
            <div className="relative pl-6">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 rounded-full" />
              
              {timeline.map((item, index) => {
                const Icon = timelineIcons[item.icon as keyof typeof timelineIcons];
                return (
                  <motion.div 
                    key={index} 
                    className="mb-6 ml-6 relative"
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={timelineItemVariants}
                  >
                    {/* Timeline Node */}
                    <motion.div 
                      className="absolute -left-9 mt-1 h-6 w-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md ring-2 ring-white dark:ring-gray-900"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-3 w-3" />
                    </motion.div>
                    
                    {/* Content Card */}
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-2 border-green-500 hover:shadow-md transition-all duration-200"
                      whileHover={{ x: 3 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950 px-2 py-0.5"
                        >
                          {item.date}
                        </Badge>
                      </div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}