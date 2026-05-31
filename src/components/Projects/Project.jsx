import "./project.css";
import { projects } from "../../assets/Datas/projectsData";

export default function Project() {
  return (
    <section id="projects" className="project-seg">
      <div className="project-header">
        <p className="project-label">Selected work</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id || index}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-card-inner">
              <div className="project-top">
                {project.type && <p className="project-type">{project.type}</p>}
                <h3 className="project-title">{project.title}</h3>
              </div>

              {project.url && (
                <div className="thumbnail-wrap">
                  <img className="thumbnail" src={project.url} alt={`${project.title} thumbnail`} />
                </div>
              )}

              <div className="project-meta">
                <p>
                  <strong>Technologies:</strong> {project.tech}
                </p>
                <p>
                  <strong>Project Details:</strong> {project.des}
                </p>
              </div>

              <div className="project-actions">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
                {project.live && (
                  <a className="secondary" href={project.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
