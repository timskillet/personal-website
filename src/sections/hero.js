import React from "react"

export function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        Tim <span className="last">Choy</span>
      </h1>
      <p className="hero-lede">
        Software engineer building{" "}
        <em className="italic-accent">reliable</em> systems — backend, infra,
        and the quiet layers underneath.
      </p>
      <div className="hero-meta">
        <span className="strong">Berkeley CS '25</span>
        <span className="dot">·</span>
        <span>San Francisco, CA</span>
        <span className="dot">·</span>
        <span>he / him</span>
      </div>
      <div className="now-line">
        <span className="live" aria-hidden="true"></span>
        <span>
          Joining <strong>IBM</strong> as a Software Developer
        </span>
      </div>
    </section>
  )
}

export default Hero
