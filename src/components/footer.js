import React from "react"

export function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Tim Choy</div>
      <div className="right">
        <span>Built quietly</span>
        <span>·</span>
        <span>v2</span>
      </div>
    </footer>
  )
}

export default Footer
