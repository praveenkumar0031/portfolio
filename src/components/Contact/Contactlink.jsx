
import mail from '../../assets/contactPics/mail.jpeg';
import linkedin from '../../assets/contactPics/lkin.jpeg';
import github from '../../assets/contactPics/github.jpeg';
import './contact.css';
const Contactlink = () => {
  const contacts = [
    {
      name: "Mail",
      icon: mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Hello&body=This%20is%20a%20test",
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
  <div id="contact">
    <h2 >
          Contact Me
        </h2>
    <div className="btn-box">
      
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <img src={contact.icon} alt={contact.name} className="icon" />
        </a>
      ))}
    </div>
    </div>
  );
};

export default Contactlink;
