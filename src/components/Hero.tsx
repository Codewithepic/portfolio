import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ 
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ 
          x: [0, -20, 40, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ 
          x: [0, 50, -25, 0],
          y: [0, -25, 50, 0],
          scale: [1, 1.3, 0.7, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="w-fit text-sm px-4 py-2 hover:scale-105 transition-transform cursor-default">
                👋 Hello, I'm
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="text-gray-900 dark:text-white inline-block"
                whileHover={{ scale: 1.05 }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              <span className="text-blue-600 dark:text-blue-400">Cyber Security</span> | <span className="text-purple-600 dark:text-purple-400">Blockchain</span> | <span className="text-pink-600 dark:text-pink-400">AI</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
              variants={itemVariants}
            >
              {personalInfo.bio}
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-wrap gap-4 items-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="shadow-lg transform hover:scale-105 transition-transform"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me:</p>
            <div className="flex gap-4">
              <motion.a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }}>
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }}>
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }}>
                <Twitter className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div 
          className="relative flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.div 
            className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700 rounded-full blur-2xl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img
            src="/profile-pic.png"
            alt="Dhruv Gupta"
            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Scroll to about section"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}