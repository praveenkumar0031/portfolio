import { useState } from "react";
import { Navlinks } from "../../assets/Datas/navbarData";
import Linkbutton from "./linkButton";
import "./nav.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Praveen's Portfolio</h2>


      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>


      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {Navlinks.map((link) => (
          <Linkbutton key={link.id} to={link.id} className={link.className}>
            {link.label}
          </Linkbutton>
        ))}
      </ul>
    </nav>
  );
}
