import basicChatAppPreviewSrc from "../img/BasicChatAppPreview.jpg";

function ProjectCards({ projectInfo }) {
  const techUsed = projectInfo["techUsed"];
  console.log(techUsed);
  return (
    <div className="project-card-container">
      <img
        src={basicChatAppPreviewSrc}
        alt="Basic Chat App"
        className="project-preview-img"
      />
      <div className="project-card-main-container">
        <div className="project-card-title-container text-bg">
          <h1>{projectInfo["title"]}</h1>
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
      </div>
    </div>
  );
}

export default ProjectCards;
