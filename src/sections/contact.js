import React from "react"

function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      <div className="section-num">{num}</div>
      <div className="section-title">{title}</div>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact-block">
      <SectionHead num="05" title="Contact" />
      <h2 className="contact-headline">
        Always open to a <span className="it">good</span> conversation.
      </h2>
      <div className="contact-links">
        <a className="contact-pill" href="mailto:timchoy@berkeley.edu">
          timchoy@berkeley.edu <span className="arrow">↗</span>
        </a>
        <a
          className="contact-pill"
          href="https://github.com/timskillet"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span className="arrow">↗</span>
        </a>
        <a
          className="contact-pill"
          href="https://www.linkedin.com/in/tim-choy1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
