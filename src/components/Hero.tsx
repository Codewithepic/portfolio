import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { ParticleBackground } from "./ParticleBackground";

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const typingWords = ["Cybersecurity Expert", "Blockchain Developer", "AI Enthusiast", "Full Stack Developer"];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      <motion.div 
        className="absolute top-40 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-40 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>

      {/* Main Content Container - Clean Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Section */}
          <motion.div 
            className="space-y-8 text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4 inline-block">
                👋 Hello, I'm
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              <span className="text-gray-600 dark:text-gray-400">I'm a </span>
              <br className="block sm:hidden" />
              <Typewriter 
                words={typingWords}
                className="text-blue-600 dark:text-blue-400 font-semibold"
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-lg"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me:</p>
              <div className="flex gap-4">
                <motion.a 
                  href={personalInfo.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href={personalInfo.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href={personalInfo.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar Section */}
          <motion.div 
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            variants={floatingVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"
                variants={pulseVariants}
                animate="animate"
              ></motion.div>
              
              {/* Avatar Container with Rotation Animation */}
              <motion.div 
                className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 p-2"
                variants={rotateVariants}
                animate="animate"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <motion.div 
                    className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div 
                      className="text-6xl md:text-7xl lg:text-8xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      👨‍💻
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
}