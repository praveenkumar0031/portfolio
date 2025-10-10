import { skillsData } from "../../assets/Datas/skillsData";
import "./skill.css";

const SkillCategory = ({ title, skills }) => (
    <div id="skills" className="skill-category">
        <h4>{title}</h4>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                    <img src={skill.logo} alt={skill.name} />
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Skills() {
    return (
        <div className="skill-seg">
            <h2 className="skill-cat">Skills</h2>
            <section className="skills-section">

                {Object.entries(skillsData).map(([category, skills]) => (
                    <SkillCategory key={category} title={category} skills={skills} />
                ))}
            </section>
        </div>
    );
}
