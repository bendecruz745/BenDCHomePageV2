import "../css/Projects.css";
import ProjectCards from "./ProjectCards";
import projectData from "../data/Projects.json";
const projectList = projectData["Projects"];

function Projects() {
  return (
    <div className="projects-page-container">
      <div className="projects-window-container text-bg">
        <div className="projects-window-title-container">
          <h1 className="projects-window-title-text">Projects</h1>
        </div>
        {projectList ? (
          projectList.map((data, index) => (
            <ProjectCards projectInfo={data} key={index} />
          ))
        ) : (
          <div>No data to display</div>
        )}
      </div>
    </div>
  );
}

export default Projects;
