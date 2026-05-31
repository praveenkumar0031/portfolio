import mail from "../../assets/contactPics/mail.jpeg";
import linkedin from "../../assets/contactPics/lkin.jpeg";
import github from "../../assets/contactPics/github.jpeg";
import "./footer.css";
import Contactlink from "../Contact/Contactlink";
const socialLinks = [
  {
    alt: "Mail",
    src: mail,
    href: "mailto:praveen0031kumar@gmail.com",
  },
  {
    alt: "LinkedIn",
    src: linkedin,
    href: "https://www.linkedin.com/in/praveen-kumar-s-38b971288",
  },
  {
    alt: "GitHub",
    src: github,
    href: "https://github.com/praveenkumar0031",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
        <Contactlink />
      <div className="footer-top">
        <div className="footer-copy">
          <p className="section-label">CONNECT WITH ME</p>
          <h2>
            Hi, Got a project? <br />
            <span className="gradient-text">Let's Talk.</span>
          </h2>
          <p>
            Send me a mail and let's discuss your next product, website, or
            team opportunity.
          </p>
          <div className="footer-actions">
            <a className="footer-btn primary" href="mailto:praveen0031kumar@gmail.com">
              Send Mail
            </a>
            <a className="footer-btn" href="https://www.linkedin.com/in/praveen-kumar-s-38b971288/" target="_blank" rel="noreferrer">
              Connect me
            </a>
          </div>
        </div>
        <div className="footer-social-panel">
          <div className="social-heading">
            <p>Contact me through other media</p>
          </div>
          <div className="social-list">
            {socialLinks.map((link) => (
              <a key={link.alt} href={link.href} target="_blank" rel="noreferrer" className="social-card">
                <img src={link.src} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <div className="footer-meta">
          <p>© 2026 | Praveen Kumar</p>
          <p>
            Site by <span className="gradient-text">Praveen Kumar</span>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
