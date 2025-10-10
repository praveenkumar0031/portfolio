import './project.css';

import { projects, getProjectCount } from "../../assets/Datas/projectsData"
function Project() {
  const count = getProjectCount();
  return (
    <div id="projects" className='project-seg'>
      <h2 className='my-project'>Show Casing My Projects </h2>
      <div className='projects'>

        {projects.map(project => (
          <div key={project.id}>
            <h3 className='title'>{project.title}</h3>
            <img className='thumbnail' src={project.url} />
            <p className='tech'>Technologies: {project.tech}</p>
            <p className='des'> <h3>Project Details:</h3> {project.des}</p>
            <p className='link'><a href={project.link} target='_blank'>watch out</a></p>
            {project.live && (<p className='live-link'>
              <a href={project.live} target='_blank' rel='noopener noreferrer'>LIVE</a>
            </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Project;