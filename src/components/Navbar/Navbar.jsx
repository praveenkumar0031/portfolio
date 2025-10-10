
import { Navlinks } from "../../assets/PortfolioData";
import Linkbutton from "./linkButton";
import "./nav.css";  

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"> Devloper's Portfolio</h2>
      <ul className="nav-links">
 {Navlinks.map((link) => (
                <Linkbutton    
                    to={link.id}        
                    className={link.className}
                >
                    {link.label}
                </Linkbutton>
            ))}
        </ul>
    </nav>
  );
}
