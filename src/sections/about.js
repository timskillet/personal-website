import { motion } from "motion/react"
import { Code2, Rocket, Users, Award } from "lucide-react"
import profilePicture from "../images/tim.png"
import React from "react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering projects on time without compromising quality",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Ensuring high standards in every project",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-20"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-2xl group-hover:shadow-cyan-500/20">
                <img
                  src={profilePicture}
                  width={500}
                  height={500}
                  alt="Tim Choy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-200 text-lg leading-relaxed">
              Hi, my name is Tim! I am a recent UC Berkeley graduate with
              degrees in Computer Science and Data Science. Most of my
              experience with programming has come from building real
              applications, breaking them, and figuring out how to make them
              better. Engineering for me is about stretching my understanding of
              how things work under the hood, especially when there's room to
              optimize, scale, or rethink the architecture entirely.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Throughout my engineering journey, my work has spanned across
              systems programming, data engineering, and AI research. Whether
              it's designing distributed architectures, building data pipelines
              for bioinformatics, or training emotionally-aware conversational
              LLMs, I strive to build elegant solutions while learning something
              new along the way. What motivates me most is tackling complex
              engineering problems that require both strong fundamentals and a
              bit of creatvity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
