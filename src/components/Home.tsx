import '../styles/Home.css';

const Home = () => {
  const handleImageLoad = () => {
    console.log("Image loaded successfully");
  };

  const handleImageError = () => {
    console.log("Image failed to load. Check the path or file existence.");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <img
          src="/yaw-page/Yavuz.jpg"
          alt="Portfolio Image"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/yaw-page/about">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Home;