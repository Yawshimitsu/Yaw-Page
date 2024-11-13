import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        
        {/* Task Manager Project */}
        <div className="project-card">
          <h3>Task Manager</h3>
          <p>Manage tasks with add and delete functionality.</p>
          <Link to="/projects/task-manager" className="project-link">View Project</Link>
        </div>

        {/* Weather Dashboard Project */}
        <div className="project-card">
          <h3>Weather Dashboard</h3>
          <p>Real-time weather data for various cities.</p>
          <Link to="/projects/weather-dashboard" className="project-link">View Project</Link>
        </div>

        {/* E-commerce Product Page Project */}
        <div className="project-card">
          <h3>E-commerce Product Page</h3>
          <p>A simple product page with add-to-cart functionality.</p>
          <Link to="/projects/ecommerce-product-page" className="project-link">View Project</Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;