import { useState } from "react";
import { Navlinks } from "../../assets/Datas/navbarData";
import Linkbutton from "./linkButton";
import "./nav.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Praveen's Portfolio</h2>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {Navlinks.map((link) => (
          <li key={link.id} onClick={closeMenu}> 
            {/* Wrapping in an li or passing onClick to Linkbutton 
               ensures the menu closes as soon as a link is tapped.
            */}
          <Linkbutton to={link.id} className={link.className}>
            {link.label}
          </Linkbutton>
          </li>
        ))}
      </ul>
      
      {/* Optional: Overlay to close menu by clicking outside */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}