import React from "react"

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div className="section-title">{title}</div>
    </div>
  )
}

const XP = [
  {
    when: "Jul 2026 →",
    role: "Software Developer",
    company: "IBM",
    location: "Incoming",
    desc: "Joining IBM as a Software Developer this summer.",
  },
  {
    when: "Jan – Apr 2026",
    role: "DevOps / Platform Engineering Intern",
    company: "Human Interest",
    location: "Builder Tools",
    desc: "Built infrastructure and automation for the Org Support department to lift developer productivity and system reliability — overhauled CI/CD pipelines, designed container health checks for ECS services, and shipped the core logic behind org-wide SLO & SLA tracking and enforcement.",
  },
  {
    when: "Jun – Dec 2024",
    role: "Deep Learning Researcher",
    company: "Project AEI",
    location: "Research",
    desc: "Trained conversational models for emotional intelligence in PyTorch — closed-form continuous-time layers, transformer encoders, residual stacks.",
  },
  {
    when: "Sep – Dec 2023",
    role: "Data Engineering Intern",
    company: "Triplebar",
    location: "Bioinformatics",
    desc: "Built an ETL pipeline from Postgres into a graph model for genetic relationships, plus a Dash dashboard for protein-strain exploration.",
  },
  {
    when: "Jun – Aug 2022",
    role: "Mobile Developer Intern",
    company: "Socale",
    location: "Mobile",
    desc: "Maintained a Flutter codebase with Firebase auth, real-time chat, and customizable profile components.",
  },
]

export function Experience() {
  return (
    <section id="experience">
      <SectionHead num="03" title="Experience" />
      <ul className="xp-list">
        {XP.map((x, i) => (
          <li className="xp-item" key={i}>
            <div className="xp-when">{x.when}</div>
            <div>
              <div className="xp-role">{x.role}</div>
              <div className="xp-company">
                <span className="pin">{x.company}</span> · {x.location}
              </div>
              <p className="xp-desc">{x.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
