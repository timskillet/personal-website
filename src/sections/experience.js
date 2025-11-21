import React from "react"
import { motion } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      role: "Deep Learning Researcher",
      company: "Project AEI",
      period: "Jun 2024 - Dec 2024",
      accomplishments: [
        "Designed, optimized, and trained conversational AI models for emotional intelligence that enhanced memory efficiency and training speed using PyTorch and Vertex AI",
        "Synthesized research on state-of-the-art deep learning architectures to guide model design, involving closed-form continuous-time layers, transformer encoder layers, and residual connections",
      ],
    },
    {
      role: "Data Engineering Intern",
      company: "Triplebar",
      period: "Sep 2023 - Dec 2023",
      accomplishments: [
        "Designed and implemented an ETL pipeline to extract, transform, and load data from Postgres database into a graph-based model, enhancing data representation and analysis for genetic relationships",
        "Built an interactive dashboard for bioinformatics teams using Dash, supporting efficient graph traversal and visual exploration of protein strain data",
        "Implemented statistical simulations with probability distributions to generate synthetic genetic data, improving the accuracy and robustness of genotyping pipelines",
      ],
    },
    {
      role: "Mobile Developer Intern",
      company: "Socale",
      period: "Jun 2022 - Aug 2022",
      accomplishments: [
        "Maintained cross-platform mobile app codebase with rigorous unit testing and documentation in Flutter and Dart",
        "Collaborated with designers to develop dynamic, customizable user profiles with interactive components",
        "Implemented Firebase services for user authentication, real-time chat, and cloud-based data storage",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[23px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 ring-4 ring-slate-800/50 group-hover:ring-cyan-500/30 transition-all duration-300">
                <Briefcase size={18} className="text-white" />
              </div>

              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-6 ml-6 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-transparent text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-700/30 border border-slate-600/50">
                    <Calendar size={16} className="text-cyan-400" />
                    <span className="text-gray-300 font-medium text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.accomplishments.map(
                    (accomplishment, accomplishmentIndex) => (
                      <li
                        key={accomplishmentIndex}
                        className="text-gray-200 flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-cyan-400 font-bold text-lg flex-shrink-0 leading-tight">
                          ▸
                        </span>
                        <span className="flex-1">{accomplishment}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
