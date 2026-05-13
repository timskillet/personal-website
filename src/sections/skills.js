import React from "react"

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div className="section-title">{title}</div>
    </div>
  )
}

const STACK = [
  {
    cat: "Languages",
    items: ["Python", "Go", "Java", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    cat: "Frameworks",
    items: ["React", "React Native", "FastAPI", "PyTorch", "LangChain", "Node.js"],
  },
  {
    cat: "Infra",
    items: [
      "AWS",
      "ECS",
      "Terraform",
      "Docker",
      "Datadog",
      "GitHub Actions",
      "CircleCI",
    ],
  },
  {
    cat: "Data",
    items: ["Supabase", "MongoDB", "DynamoDB", "ChromaDB"],
  },
]

export function Skills() {
  return (
    <section id="skills">
      <SectionHead num="04" title="Stack" />
      <div className="skills-grid">
        {STACK.map(s => (
          <React.Fragment key={s.cat}>
            <div className="skill-cat">{s.cat}</div>
            <div className="skill-vals">
              {s.items.map((it, i) => (
                <React.Fragment key={it}>
                  {i > 0 && <span className="sep">/</span>}
                  {it}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Skills
