import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <img src="/Yavuz.jpg" alt="Portfolio Image" />
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/yaw-page/about">Learn More</a> {/* Update link path for GH Pages */}
        </button>
      </div>
    </div>
  );
};

export default Home;