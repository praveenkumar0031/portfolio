import React, { useEffect, useRef, useState } from "react";
import { skillsData } from "../../assets/Datas/skillsData";
import "./skill.css";

function capitalizeLabel(key) {
  return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
}

export default function Skills() {
  const items = Object.values(skillsData).flat();
  const marqueeItems = [...items, ...items, ...items];
  const gridRef = useRef(null);
  const collapsedLimit = 6;
  const [expanded, setExpanded] = useState(() =>
    Object.keys(skillsData).reduce((acc, key) => {
      acc[key] = key.toLowerCase() === "technical";
      return acc;
    }, {})
  );

  function toggleExpand(cat) {
    setExpanded((s) => ({ ...s, [cat]: !s[cat] }));
  }

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

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

      <div className="skills-grid" ref={gridRef} aria-live="polite">
        {Object.entries(skillsData).map(([category, skills]) => {
          const isExpanded = !!expanded[category];
          const needsToggle = skills.length > collapsedLimit;
          return (
            <article className="skill-card" key={category} aria-label={`${category} skills`}>
              <h3 className="card-title">{capitalizeLabel(category)}</h3>

              <ul className={`skill-list ${isExpanded ? "expanded" : "collapsed"}`}>
                {skills.map((skill) => (
                  <li className="skill-item" key={skill.name}>
                    <img src={skill.logo} alt="" aria-hidden="true" />
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>

              {needsToggle && (
                <div className="card-footer">
                  <button
                    className="show-more"
                    onClick={() => toggleExpand(category)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
