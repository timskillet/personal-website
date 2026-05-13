import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Hero } from "../sections/hero"
import { About } from "../sections/about"
import { Projects } from "../sections/projects"
import { Experience } from "../sections/experience"
import { Skills } from "../sections/skills"
import { Contact } from "../sections/contact"
import { Footer } from "./footer"

const Layout = () => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
