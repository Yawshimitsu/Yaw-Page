import '../styles/Projects.css';  // If you want specific styles for Projects section

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-item">
        <h3>Project 1</h3>
        <p>Details about project 1.</p>
      </div>
      <div className="project-item">
        <h3>Project 2</h3>
        <p>Details about project 2.</p>
      </div>
      <div className="project-item">
        <h3>Project 3</h3>
        <p>Details about project 3.</p>
      </div>
    </section>
  );
};

export default Projects;