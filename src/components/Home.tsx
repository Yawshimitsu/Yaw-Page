import '../styles/Home.css';
import YavuzImage from '../public/Yavuz.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <img src={YavuzImage} alt="Yavuz Sucu" />
        <p>I’m a passionate developer, building things that matter.</p>
        <button className="cta-button">
          <a href="/yaw-page/about">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Home;