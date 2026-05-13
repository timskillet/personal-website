import React from "react"

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div className="section-title">{title}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about">
      <SectionHead num="01" title="About" />
      <div className="prose">
        <p>
          Recent <strong>UC Berkeley</strong> grad in Computer Science and Data
          Science, drawn to the quieter layers of the stack — distributed
          systems, developer tooling, and the infrastructure that has to{" "}
          <span className="italic-accent">actually hold</span>.
        </p>
        <p>
          My favorite hours go to long walks — once, on purpose, over a hundred
          thousand steps in a single day — and the slow kind of conversation
          that doesn't need to land anywhere. Lately I've been deep in{" "}
          <span className="italic-accent">The Pragmatic Programmer</span> and{" "}
          <span className="italic-accent">
            Designing Data-Intensive Applications
          </span>
          : the sort of books you have to put down to think. I learn most from
          things I can't quite name yet, and the discipline of seeing a system{" "}
          <span className="italic-accent">clearly</span> turns out to be the
          same one that gets you closer to seeing anything else clearly.
        </p>
      </div>
    </section>
  )
}

export default About
