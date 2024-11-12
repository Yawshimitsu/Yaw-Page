import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        {/* Correct image path referencing the public folder */}
        <img src="/Yavuz.jpg" alt="Portfolio Image" />
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/about">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Home;