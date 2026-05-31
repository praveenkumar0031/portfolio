import { skillsData } from "../../assets/Datas/skillsData";
import "./skill.css";

export default function Skills() {
  const items = Object.values(skillsData).flat();
  const marqueeItems = items.concat(items);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="skills-label">Tech Stack</p>
        <h2>Skills</h2>
      </div>

      <div className="marquee-wrapper" aria-label="Tech stack carousel">
        <div className="marquee-track" aria-hidden="true">
          {marqueeItems.map((skill, idx) => (
            <div className="marquee-item" key={`${skill.name}-${idx}`}>
              <img src={skill.logo} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
