import "./about.css";
import { aboutData } from "../../assets/Datas/aboutData";
//import Lanyard from "../../components/ui/Lanyard";
import CircularText from "../../components/ui/CircularText";

export default function About() {
  const { heroTitle, marqueeText, intro, image, competencies } = aboutData;

  const renderCompetencies = () => {
    return competencies.map((item, index) => {
      switch (item.type) {
        case "main-title":
          return (
            <div key={index} className="about-card about-card-strong">
              <h3>{item.title}</h3>
            </div>
          );
        case "section-title":
          return (
            <div key={index} className="about-card">
              <h4>{item.title}</h4>
            </div>
          );
        case "skill-area":
          return (
            <article key={index} className="about-card">
              <h4>{item.title}</h4>
              <p>{item.details}</p>
            </article>
          );
        default:
          return null;
      }
    });
  };

  return (
    <section id="home" className="about-section">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="hero-label">ABOUT</p>
          <h1>{heroTitle}</h1>
          <p className="hero-text">{intro}</p>
        </div>

        <div className="hero-visuals">
          <div className="hero-visuals-frame">
            <div className="image-panel">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="hero-circle-wrapper">
              <CircularText text="Full Stack Developer • Creative •" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(4)].map((_, index) => (
            <span key={index}>{marqueeText}</span>
          ))}
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">{renderCompetencies()}</div>
        <aside className="about-side">
          <div className="about-note">
            <p>
              I build dependable software with a strong focus on backend systems, clean API design, and deployment readiness. My work is guided by practical engineering, user clarity, and System architecture. I also had some Microservices experience with springboot and docker and I am eager to expand my expertise in this area.
            </p>
          </div>
          <div className="about-card">
            <h4>What I bring</h4>
            <ul className="about-bullets">
              <li>Reliable full-stack development using React,Java/Node, SQL/Mongodb, and Docker with aws for hosting</li>
              <li>Clean architecture with production-ready deployment patterns</li>
              <li>Fast learning, strong organization, and team-first communication</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
