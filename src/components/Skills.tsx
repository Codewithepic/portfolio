import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Blocks, Brain, Code, ChevronRight } from "lucide-react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

const skillLevels = {
  "Cyber Security": 85,
  "Blockchain": 90,
  "AI/ML": 80,
  "Web Development": 95,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [progressValues, setProgressValues] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isInView) {
      // Animate progress bars when in view
      Object.keys(skillLevels).forEach((skill, index) => {
        setTimeout(() => {
          setProgressValues(prev => ({
            ...prev,
            [skill]: skillLevels[skill as keyof typeof skillLevels]
          }));
        }, index * 200);
      });
    }
  }, [isInView]);

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

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I Do Best
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skills).map(([category, skillList], index) => {
            const Icon = skillIcons[category as keyof typeof skillIcons];
            const gradient = skillGradients[category as keyof typeof skillGradients];
            const level = skillLevels[category as keyof typeof skillLevels];
            const currentProgress = progressValues[category] || 0;

            return (
              <motion.div
                key={category}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{category}</h3>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-400">Proficiency</span>
                          <span className="text-xs font-semibold">{currentProgress}%</span>
                        </div>
                        <Progress 
                          value={currentProgress} 
                          className="h-1.5"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {skillList.map((skill) => (
                        <motion.div
                          key={skill}
                          className="flex items-center justify-between p-1.5 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <span className="text-xs font-medium">{skill}</span>
                          <ChevronRight className="h-3 w-3 text-gray-400" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "React", icon: "⚛️", color: "text-blue-500" },
              { name: "TypeScript", icon: "📘", color: "text-blue-600" },
              { name: "Python", icon: "🐍", color: "text-green-500" },
              { name: "Solana", icon: "🌐", color: "text-purple-500" },
              { name: "Ethereum", icon: "💎", color: "text-gray-700" },
              { name: "Node.js", icon: "🟢", color: "text-green-600" },
              { name: "Firebase", icon: "🔥", color: "text-orange-500" },
              { name: "TensorFlow", icon: "🧠", color: "text-orange-400" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}