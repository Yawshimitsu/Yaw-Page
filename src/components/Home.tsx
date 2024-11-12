import '../styles/Home.css';
import YavuzImage from '../assets/Yavuz.jpg';  // Import the image

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <img src={YavuzImage} alt="Portfolio Image" />
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/about">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Home;