import React from "react"
import { motion } from "motion/react"
import { ExternalLink, Github } from "lucide-react"
import secondBrain from "../images/second-brain-project.png"
import pintos from "../images/pintos-bean.png"
import dfs from "../images/dfs.png"
import smartCalendar from "../images/smart-cal.png"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Second Brain",
      description:
        "I built a full-stack, AI application that enables private, locally hosted LLM interactions. I designed a RAG pipeline that ingests personal documents and provides context-aware responses while ensuring complete data privacy. For the backend, I implemented a high-performance FastAPI service supporting document processing, vectorization, and semantic search using ChromaDB, along with SQLite-backed chat history persistence. On the frontend, I developed a responsive React + Electron interface featuring real-time message streaming, seamless file upload for document ingestion, and intelligent autocomplete for document references using custom hooks and shared context. Together, these components form a fast, privacy-preserving desktop assistant capable of leveraging a user’s knowledge base for intelligent local querying.",
      image: secondBrain,
      technologies: [
        "React",
        "Electron",
        "Python",
        "FastAPI",
        "LangChain",
        "LlamaCpp",
        "ChromaDB",
      ],
      github: "https://github.com/timskillet/second-brain",
    },
    {
      title: "Smart Calendar App",
      description:
        "I developed a full-stack, cross-platform smart calendar application that allows users to schedule and manage events in real time across multiple devices. To ensure flexibility and maintain data consistency, I designed a type-safe calendar system in TypeScript that supports a variety of entry types and can be easily extended with new features. I implemented secure authentication, role-based access control, and granular permission settings to enable collaborative scheduling, calendar sharing, and efficient task management. Built with React Native/Expo and Supabase for the backend, the application delivers a seamless, reliable, and secure experience for both individual and team productivity.",
      image: smartCalendar,
      technologies: ["React Native", "TypeScript", "Expo", "Supabase"],
      github: "https://github.com/timskillet/SmartCalendarApp",
    },
    {
      title: "Distributed Filestore",
      description:
        "I designed a distributed file storage system deployed on AWS and using Go. The system splits files into chunks, stores them across multiple EC2-based storage nodes, and tracks metadata in DynamoDB. A public API server handles upload/download requests, proxies chunk transfers to private nodes inside a VPC, and manages node health via heartbeat monitoring. Infrastructure is fully provisioned using Terraform, including EC2 instances, networking, IAM roles, and DynamoDB tables. The result is a scalable, cloud-native storage architecture that demonstrates distributed systems design, backend engineering, and AWS automation..",
      image: dfs,
      technologies: ["Go", "AWS EC2", "AWS VPC", "AWS DynamoDB", "Terraform"],
      github: "https://github.com/timskillet/distributed-filestore",
    },
    {
      title: "PintOS",
      description:
        "Over the course of a semester, I worked within a large, low-level C codebase to implement core components of an operating system. I contributed to the design and development of user program support, multithreading, and a minimal yet fully functional file system. Key problems I tackled included implementing process-control system calls, building a user-level synchronization library, designing a priority-based CPU scheduler, and developing an inode-based file system with persistent storage. The project required extensive debugging, testing, and collaboration with other students to ensure correctness and robustness at the kernel level. Together, these contributions produced a functional, multithreaded operating system capable of running user processes and managing a reliable file system.",
      image: pintos,
      technologies: [
        "C",
        "Operating Systems",
        "Multithreading",
        "Docker",
        "GDB",
      ],
      github: "https://cs162.org",
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-20"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <div className="flex justify-center">
            <p className="text-gray-300 text-lg max-w-2xl text-center">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>
        </motion.div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-4 md:gap-6 items-start group`}
            >
              {/* Image Section */}
              <div className="w-full md:w-auto md:flex-shrink-0">
                <div className="relative rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 p-2 group-hover:border-cyan-500/50 group-hover:shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-500 backdrop-blur-sm w-full md:inline-block">
                  <div className="relative rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-full md:max-w-[500px] max-h-[400px] h-auto object-contain transition-transform duration-700 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full min-w-0">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-gray-300 text-sm font-medium border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-cyan-500/20 hover:to-blue-500/20 text-gray-400 hover:text-cyan-400 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-cyan-500/20 hover:to-blue-500/20 text-gray-400 hover:text-cyan-400 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
                        aria-label="View live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
