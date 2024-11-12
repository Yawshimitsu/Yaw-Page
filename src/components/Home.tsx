import '../styles/Home.css';  // Import a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <img src="/yaw-page/Yavuz.jpg" alt="Portfolio Image" /> {/* Updated image path */}
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/about">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Home;