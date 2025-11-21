import React from "react"
import { motion } from "motion/react"
import config from "../config"

export function Contact() {
  const emailLink = config.socialLinks.find(link => link.name === "Email")

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <div className="flex justify-center">
            <p className="text-gray-300 text-lg max-w-2xl text-center leading-relaxed">
              I'm always open to conversations, collaboration, and new
              opportunities — whether it's about engineering, AI, or something
              completely unexpected. Feel free to reach out if you'd like to
              work together, ask a question, or just say hello.
            </p>
          </div>
          {emailLink && (
            <motion.a
              href={emailLink.url}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Send a message!
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
