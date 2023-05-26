import basicChatAppPreviewSrc from "../img/BasicChatAppPreview.jpg";

function ProjectCards({ projectInfo }) {
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
      </div>
    </div>
  );
}

export default ProjectCards;
