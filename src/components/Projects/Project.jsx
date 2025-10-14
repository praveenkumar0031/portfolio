import './project.css';
import { projects } from "../../assets/Datas/projectsData";

function Project() {
  return (
    <div id="projects" className="project-seg">
      <h2 className="my-project">Showcasing My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="title">{project.title}</h3>

            <img
              className="thumbnail"
              src={project.url}
              alt={project.title + " thumbnail"}
            />

            {project.type && (
              <h4 className="type-topic">{project.type} Project</h4>
            )}

            <div className="tech">
              <strong>Technologies:</strong> {project.tech}
            </div>

            <div className="des">
              <strong>Project Details:</strong> {project.des}
            </div>

            <p className="link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Check Out
              </a>
            </p>

            {project.live && (
              <p className="live-link">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
