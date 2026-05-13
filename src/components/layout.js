import * as React from "react"

import Header from "./header"
import { Hero } from "../sections/hero"
import { About } from "../sections/about"
import { Projects } from "../sections/projects"
import { Experience } from "../sections/experience"
import { Skills } from "../sections/skills"
import { Contact } from "../sections/contact"
import { Footer } from "./footer"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="shell">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Layout
