import React from "react"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import config from "../config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80 // Height of the header
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-all duration-300 group cursor-pointer"
          >
            {"<"}
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Tim
            </span>
            {"/>"}
          </button>

          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-2 text-sm">
              Made with{" "}
              <Heart
                size={16}
                className="text-cyan-400 animate-pulse"
                fill="currentColor"
              />{" "}
              © {currentYear} Tim Choy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
