
import "./nav.css";  

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"> Devloper's Portfolio</h2>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">About</a></li>
        <li><a href="/" className="nav-link">Projects</a></li>
        <li><a href="/" className="nav-link">Skills</a></li>
        <li><a href="/about" className="nav-link">Resume</a></li>
        <li><a href="/contact" className="nav-link">Contact</a></li>

      </ul>
    </nav>
  );
}
