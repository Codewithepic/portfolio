import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Index() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'}`}
      >
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%]"
          style={{ scaleX: scrollYProgress, zIndex: 50 }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dhruv Gupta
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dhruv Gupta
              </h3>
              <p className="text-muted-foreground text-sm">
                Cyber Security enthusiast, Blockchain developer, and AI innovator building the future of secure digital experiences.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3 text-sm">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex items-center gap-5">
                <motion.a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} className="text-muted-foreground hover:text-foreground">
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <div className="border-t pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Dhruv Gupta. Built with React, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2">Open for collaboration and new opportunities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}