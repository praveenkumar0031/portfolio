import mail from "../../assets/contactPics/mail.jpeg";
import linkedin from "../../assets/contactPics/lkin.jpeg";
import github from "../../assets/contactPics/github.jpeg";
import "./contact.css";

const Contactlink = () => {
  const contacts = [
    {
      name: "Mail",
      icon: mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=praveen0031kumar@gmail.com&su=Hi&body=This%20is%20about%20position%20you%20are%20seeking",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/praveen-kumar-s-38b971288",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/praveenkumar0031",
    },
  ];

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

        <a className="cta-button" href="mailto:praveen0031kumar@gmail.com">
          Hire Me — Send Email
        </a>
      </div>

      <div className="contact-footer">
        <p className="contact-footer-copy">Reach me directly through any of these links.</p>
        <div className="contact-icons">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={contact.icon} alt={contact.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contactlink;
