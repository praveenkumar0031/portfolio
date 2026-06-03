import { useState, useEffect, useRef } from "react";
import "./project.css";
import { projects } from "../../assets/Datas/projectsData";

export default function Project() {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const closeBtnRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const toggleProject = (projectOrId, event) => {
    if (event.target.closest("a")) return;
    // Open modal for clicked project (projectOrId can be object or id)
    const project = typeof projectOrId === "object" ? projectOrId : projects.find(p => p.id === projectOrId);
    setModalProject(project || null);
  };

  const handleKeyDown = (project, event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setModalProject(project);
    }
  };

  useEffect(() => {
    
    document.body.classList.toggle("modal-open", Boolean(modalProject));

    const onKey = (e) => {
      if (e.key === "Escape" && modalProject) setModalProject(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalProject]);

  useEffect(() => {
    if (modalProject && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [modalProject]);

  return (
    <section id="projects" className="project-seg">
      <div className="project-header">
        <p className="project-label">Selected work</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => {
          const isExpanded = expandedId === project.id;
          return (
            <article
              key={project.id || index}
              className={`project-card ${isExpanded ? "expanded" : "collapsed"}`}
              onClick={(event) => toggleProject(project, event)}
              onKeyDown={(event) => handleKeyDown(project, event)}
              tabIndex={0}
              aria-expanded={isExpanded}
            >
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

                <div className={`project-details ${isExpanded ? "open" : ""}`}>
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
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal overlay */}
      {modalProject && (
        <div
          className="project-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProject.title} preview`}
          onClick={() => setModalProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              aria-label="Close preview"
              onClick={() => setModalProject(null)}
              ref={closeBtnRef}
            >
              ×
            </button>

            <div className="project-modal-content">
              {modalProject.url && (
                <div className="modal-image-wrap">
                  <img src={modalProject.url} alt={`${modalProject.title} screenshot`} />
                </div>
              )}

              <div className="modal-body">
                <h3 className="modal-title">{modalProject.title}</h3>
                {modalProject.type && <p className="modal-type">{modalProject.type}</p>}
                <div className="modal-desc">
                  <p>{modalProject.des}</p>
                </div>

                <div className="modal-meta">
                  <p>
                    <strong>Tech stack:</strong> {modalProject.tech}
                  </p>
                </div>

                {modalProject.features && (
                  <div className="modal-features">
                    <h4>Features</h4>
                    <ul>
                      {modalProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-actions">
                  {modalProject.link && (
                    <a href={modalProject.link} target="_blank" rel="noopener noreferrer" className="btn">
                      View on GitHub
                    </a>
                  )}
                  {modalProject.live && (
                    <a href={modalProject.live} target="_blank" rel="noopener noreferrer" className="btn secondary">
                      Live 
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {projects.length > 3 && (
        <div className="project-toggle-row">
          <button
            type="button"
            className="show-more-btn"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
