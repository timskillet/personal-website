import React, { useState } from "react"

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div className="section-title">{title}</div>
    </div>
  )
}

const WORK = [
  {
    id: "second-brain",
    title: "Second Brain",
    tag: "private RAG",
    year: "2025",
    blurb:
      "A locally-hosted AI desktop assistant that ingests your documents and answers from them. Streaming chat, semantic search, zero data leaving the machine.",
    stack: ["React", "Electron", "FastAPI", "LangChain", "LlamaCpp", "ChromaDB"],
    href: "https://github.com/timskillet/second-brain",
  },
  {
    id: "smart-cal",
    title: "Smart Calendar",
    tag: "cross-platform",
    year: "2024",
    blurb:
      "Real-time, type-safe scheduling across devices with role-based sharing and granular permissions for team workflows.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    href: "https://github.com/timskillet/SmartCalendarApp",
  },
  {
    id: "dfs",
    title: "Distributed Filestore",
    tag: "cloud infra",
    year: "2024",
    blurb:
      "Chunked file storage across EC2 nodes inside a VPC, with DynamoDB-tracked metadata, heartbeat monitoring, and a Terraform-provisioned stack.",
    stack: ["Go", "AWS EC2", "VPC", "DynamoDB", "Terraform"],
    href: "https://github.com/timskillet/distributed-filestore",
  },
  {
    id: "pintos",
    title: "PintOS",
    tag: "kernel",
    year: "2024",
    blurb:
      "A semester implementing user processes, a priority scheduler, and an inode-backed file system inside a real OS kernel — in C, debugged with GDB.",
    stack: ["C", "Operating Systems", "Multithreading", "GDB"],
    href: "https://cs162.org",
  },
]

export function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="work">
      <SectionHead num="02" title="Selected Work" />
      <ul className="work-list">
        {WORK.map(w => {
          const isOpen = open === w.id
          const detailId = `work-detail-${w.id}`
          return (
            <li key={w.id} className={"work-item " + (isOpen ? "open" : "")}>
              <button
                className="work-row-btn"
                onClick={() => setOpen(isOpen ? null : w.id)}
                aria-expanded={isOpen}
                aria-controls={detailId}
              >
                <div className="work-row">
                  <div className="work-title-wrap">
                    <div className="work-title">{w.title}</div>
                    <div className="work-tag">— {w.tag}</div>
                  </div>
                  <div className="work-year">{w.year}</div>
                </div>
              </button>
              <div
                id={detailId}
                className="work-detail"
                role="region"
                aria-label={w.title}
                aria-hidden={!isOpen}
              >
                <p>{w.blurb}</p>
                <div className="work-stack">
                  {w.stack.map(s => (
                    <span className="stack-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source<span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
