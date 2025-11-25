import { motion } from "motion/react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import React from "react"
import config from "../config"

export function Hero() {
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cyan-400 text-left mb-4 font-medium text-lg"
            >
              Hello, my name is
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-10xl text-left sm:text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent"
            >
              Tim Choy.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl text-left sm:text-3xl md:text-4xl mb-6 font-bold text-gray-300"
            >
              I love building scalable software and understanding how systems
              work under the hood.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-left sm:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
            >
              From distributed systems to AI-driven applications, I am
              passionate about exploring new technologies and turning what I
              learn into elegant, reliable solutions. I'm especially interested
              in backend engineering and designing the infrastructure behind the
              next generation of data-driven applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-start gap-4 mb-12"
            >
              <motion.button
                onClick={() =>
                  scrollToSection(
                    config.navLinks.find(link => link.name === "Projects").id
                  )
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() =>
                  scrollToSection(
                    config.navLinks.find(link => link.name === "Contact").id
                  )
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg cursor-pointer border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <div className="flex items-center justify-center gap-6 mb-16 md:mb-20 pb-8">
              {config.socialLinks
                .filter(link => link.name === "Github")
                .map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                ))}
              {config.socialLinks
                .filter(link => link.name === "LinkedIn")
                .map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                ))}
              {config.socialLinks
                .filter(link => link.name === "Email")
                .map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() =>
          scrollToSection(
            config.navLinks.find(link => link.name === "About").id
          )
        }
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  )
}
