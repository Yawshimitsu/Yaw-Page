import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid"> {/* Added grid wrapper */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Details about project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Details about project 2.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Details about project 3.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;