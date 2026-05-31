import mail from "../../assets/contactPics/mail.jpeg";
import linkedin from "../../assets/contactPics/lkin.jpeg";
import github from "../../assets/contactPics/github.jpeg";
import "./contact.css";

const Contactlink = () => {
  

  return (
    <section id="contact" className="contact-section">
      <div className="contact-hero">
        <div>
          <p className="contact-label">Let’s build</p>
          <h2>Available for work</h2>
          <p className="contact-description">
            Open to Full-Stack, Backend, and DevOps roles. Send a note and let’s create something memorable.
          </p>
        </div>

        <a className="cta-button" href="https://www.linkedin.com/in/praveen-kumar-s-38b971288/">
          Hire Me — lets's connect
        </a>
      </div>
    </section>
  );
};

export default Contactlink;
