import './project.css' ;

import { projects,getProjectCount } from "../../assets/PortfolioData"
function Project(){
    const count=getProjectCount();
    return(
      <div className='project-seg'>
      <h2 className='my-project'>My Projects ({count})</h2>
        <div id="projects" className='projects'>
      
      {projects.map(project => (
        <div key={project.id}>
          <h3 className='title'>{project.title}</h3>
          <img className='thumbnail' src={project.url} />
          <p className='tech'>Technologies: {project.tech}</p>
          <p className='des'>Descrption: {project.des}</p>
          <p className='link'><a href={project.link} target='_blank'>watch out</a></p>
          {project.link  && (<p className='live-link'><a href={project.link} target='_blank' rel='noopener noreferrer' >live</a></p>)}
        </div>
      ))}
        </div>
        </div>
    )
}
export default Project;