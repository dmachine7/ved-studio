import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className = "navbar">
      <div className = "navbar-icon navbar-boldlink">
        Ved.studio
      </div>
      <div className = "navbar-links">
        <li>how it works</li>
        <li>why us?</li>
        <li className = "navbar-boldlink">login</li>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar;