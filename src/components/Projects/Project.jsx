
import { projects,getProjectCount } from "../../assets/PortfolioData"
function Project(){
    const count=getProjectCount();
    return(
        <div id="project">
      <h2>My Projects ({count})</h2>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          
          <p>Technologies: {project.tech}</p>
          <p>Descrption: {project.des}</p>
        </div>
      ))}
        </div>
    )
}
export default Project;