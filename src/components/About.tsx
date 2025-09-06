import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Music, MapPin, Code, Heart, Target, Lightbulb, Calendar, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-6 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            <Users className="h-4 w-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Building Tomorrow's Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate cybersecurity student and community leader, combining technical expertise with innovation to create secure, impactful digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Main About Card */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <Card className="p-8 border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
                    <p className="text-gray-600 dark:text-gray-400">Driven by passion, powered by innovation</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Target, title: "Mission", desc: "Creating secure digital solutions for tomorrow's challenges" },
                    { icon: Lightbulb, title: "Innovation", desc: "Bridging cybersecurity, AI, and blockchain technologies" },
                    { icon: Users, title: "Leadership", desc: "Organizing tech events with 1100+ attendees" },
                    { icon: Trophy, title: "Recognition", desc: "Multiple hackathon wins and community contributions" }
                  ].map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <highlight.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats & Quick Info */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            
            {/* Personal Info Card */}
            <Card className="p-6 border-0 shadow-lg bg-white dark:bg-gray-800">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Info</h4>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Based in", value: personalInfo.location, color: "blue" },
                  { icon: Code, label: "Focus", value: "Cybersecurity & AI", color: "purple" },
                  { icon: Music, label: "Hobby", value: "Guitar Player", color: "green" },
                  { icon: Calendar, label: "Experience", value: "3+ Years", color: "orange" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <div className={`w-8 h-8 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-lg flex items-center justify-center`}>
                      <item.icon className={`h-4 w-4 text-${item.color}-600 dark:text-${item.color}-400`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{item.label}</p>
                      <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7+", label: "Projects", color: "blue" },
                { value: "1100+", label: "Event Reach", color: "purple" },
                { value: "3", label: "Hackathon Wins", color: "green" },
                { value: "100%", label: "Passion", color: "pink" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`p-4 text-center border-0 shadow-lg bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/30 dark:to-${stat.color}-800/30 hover:shadow-xl transition-shadow`}>
                    <motion.div 
                      className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}