import basicChatAppPreviewSrc from "../img/BasicChatAppPreview.jpg";

function ProjectCards({ projectInfo }) {
  const techUsed = projectInfo["techUsed"];
  const testVar = projectInfo["title"];
  return (
    <div className="project-card-container">
      <img
        src={require(`../img/${testVar}Preview.jpg`)}
        alt="Basic Chat App"
        className="project-preview-img"
      />
      <div className="project-card-main-container">
        <div className="project-card-title-container text-bg">
          <a href={projectInfo["link"]}>
            <h1>{projectInfo["title"]}</h1>
          </a>
        </div>
        <div className="project-card-techused-container text-bg">
          <h2>Created using:</h2>
          <h2>
            {techUsed.map((tech, index) => {
              if (index === techUsed.length - 2) {
                return tech + " & ";
              } else if (index === techUsed.length - 1) {
                return tech;
              } else {
                return tech + ", ";
              }
            })}
          </h2>
        </div>
        <div className="project-card-main-text-container text-bg">
          <p>{projectInfo["body"]}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
