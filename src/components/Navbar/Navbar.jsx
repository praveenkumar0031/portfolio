import { useState } from "react";
import { Navlinks } from "../../assets/Datas/navbarData";
import Dock from "../../components/ui/Dock";
import "./nav.css";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = Navlinks.map((link) => ({
    id: link.id,
    label: link.label,
    icon: null,
  }));

  const handleNavClick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="nav-shell">
        <div className="brand">
          <span className="brand-mark">PK</span>
          <span className="brand-label">portfolio</span>
        </div>

        <Dock
          items={navItems}
          onSelect={handleNavClick}
          className={`dock-bar ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        />

        <div className="nav-tools">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <button
            className={`menu-btn ${menuOpen ? "active" : ""}`}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-dock ${menuOpen ? "visible" : ""}`}>
        {Navlinks.map((link) => (
          <button
            key={link.id}
            type="button"
            className="mobile-dock-item"
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}
