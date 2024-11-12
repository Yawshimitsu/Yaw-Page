import './App.css';  // Your global CSS for styling
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>Learn more about me and my work!</p>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <h2>Home</h2>
        <p>This is the home section, where I introduce myself.</p>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default App;