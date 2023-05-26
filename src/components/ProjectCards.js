import basicChatAppPreviewSrc from "../img/BasicChatAppPreview.jpg";

function ProjectCards({ projectInfo }) {
  return (
    <div className="projects-card-container">
      <img
        src={basicChatAppPreviewSrc}
        alt="Basic Chat App"
        className="project-preview-img"
      />
    </div>
  );
}

export default ProjectCards;
