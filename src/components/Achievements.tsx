import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Heart, Award, Star, Medal, Crown, Zap } from "lucide-react";
import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const typeIcons = {
  Competition: Trophy,
  Leadership: Users,
  Community: Heart,
};

const typeColors = {
  Competition: "text-yellow-600 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200",
  Leadership: "text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200",
  Community: "text-green-600 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200",
};

const typeGradients = {
  Competition: "from-yellow-500 to-orange-500",
  Leadership: "from-blue-500 to-purple-500", 
  Community: "from-green-500 to-emerald-500",
};

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <section id="achievements" className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium">
            Hall of Fame
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Celebrating milestones, victories, and impactful contributions that have shaped my journey 
            in technology and community leadership.
          </p>
        </motion.div>

        {/* Achievement Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { 
              icon: Trophy, 
              value: "8+", 
              label: "Total Achievements", 
              gradient: "from-yellow-500 to-orange-500",
              bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950",
              border: "border-yellow-200 dark:border-yellow-800"
            },
            { 
              icon: Users, 
              value: "1100+", 
              label: "People Impacted", 
              gradient: "from-blue-500 to-purple-500",
              bgGradient: "from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950",
              border: "border-blue-200 dark:border-blue-800"
            },
            { 
              icon: Medal, 
              value: "3", 
              label: "Hackathon Wins", 
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
              border: "border-green-200 dark:border-green-800"
            },
            { 
              icon: Crown, 
              value: "600+", 
              label: "Event Attendees", 
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
              border: "border-purple-200 dark:border-purple-800"
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`text-center p-4 md:p-6 bg-gradient-to-br ${stat.bgGradient} border ${stat.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => {
            const Icon = typeIcons[achievement.type as keyof typeof typeIcons];
            const colorClass = typeColors[achievement.type as keyof typeof typeColors];
            const gradientClass = typeGradients[achievement.type as keyof typeof typeGradients];

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="group h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  {/* Gradient Top Border */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradientClass}`} />
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 dark:to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-4 md:p-6 relative z-10">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <Badge 
                        className={`${colorClass} border-0 px-2 py-1 text-xs font-semibold`}
                      >
                        {achievement.type}
                      </Badge>
                      <motion.div
                        animate={hoveredCard === index ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Zap className="h-3 w-3 md:h-4 md:w-4 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div 
                      className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-gradient-to-r ${gradientClass} rounded-xl flex items-center justify-center relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                        {achievement.description}
                      </p>
                      
                      {/* Date with Star */}
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <Badge 
                          variant="outline" 
                          className={`px-2 py-0.5 text-xs font-semibold bg-gradient-to-r ${gradientClass} text-white border-0`}
                        >
                          {achievement.date}
                        </Badge>
                        <Star className="h-3 w-3 text-yellow-500" />
                      </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <Icon className="h-12 w-12 md:h-16 md:w-16 text-current" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 md:p-8 text-white mx-4 md:mx-0">
            <Award className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Create New Achievements?</h3>
            <p className="text-yellow-100 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Let's collaborate on your next project and create something remarkable together. 
              Every great achievement starts with a conversation.
            </p>
            <motion.button
              className="bg-white text-orange-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
