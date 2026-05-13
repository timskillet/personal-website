import React, { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={"topbar " + (scrolled ? "scrolled" : "")}>
      <div className="topbar-inner">
        <a href="#top" className="brand">
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-name">Tim Choy</span>
          <span className="brand-status">/ engineer</span>
        </a>
        <nav className="top-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:timchoy@berkeley.edu">Email</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
