import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Music, MapPin, Code, Award, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-4 hover:scale-105 transition-transform">About Me</Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Get to know me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate about creating secure digital solutions and leading tech communities
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Personal Details */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {[
                { icon: MapPin, color: "blue", label: "Location", value: personalInfo.location },
                { icon: Music, color: "purple", label: "Hobby", value: "Guitar Player" },
                { icon: Users, color: "green", label: "Role", value: "Community Leader" },
                { icon: Trophy, color: "yellow", label: "Achievement", value: "Hackathon Winner" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-10 h-10 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-lg flex items-center justify-center`}>
                    <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Tags */}
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <h4 className="font-medium">Core Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Cybersecurity", "Blockchain", "AI/ML", "Community Building", "Innovation", "Problem Solving"].map((interest, index) => (
                  <motion.div
                    key={interest}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge variant="outline" className="px-3 py-1 cursor-default">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats & Achievements */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {[
                { value: "7+", label: "Projects Completed", gradient: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800", color: "blue" },
                { value: "1100+", label: "Event Attendees", gradient: "from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800", color: "purple" },
                { value: "3", label: "Hackathon Wins", gradient: "from-green-50 to-green-100 dark:from-green-900 dark:to-green-800", color: "green" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`p-6 text-center border-0 shadow-lg bg-gradient-to-br ${stat.gradient} cursor-default`}>
                    <motion.div 
                      className={`text-3xl font-bold text-${stat.color}-600 mb-2`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Achievements */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Recent Achievements
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "CODESTORM 2024 - 3rd Place", desc: "Cybersecurity Innovation", year: "2024", color: "blue" },
                    { title: "TEDx Event Organization", desc: "600+ Attendees", year: "2024", color: "purple" },
                    { title: "CityPulse Hackathon Winner", desc: "AI & Google Tech", year: "2024", color: "green" }
                  ].map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ x: -50, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-${achievement.color}-600 rounded-full`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.desc}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{achievement.year}</Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}