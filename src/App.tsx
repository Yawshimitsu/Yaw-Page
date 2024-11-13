import './App.css';  // Your global CSS for styling
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import TaskManager from './pages/TaskManager';
import WeatherDashboard from './pages/WeatherDashboard';
import EcommerceProductPage from './pages/EcommerceProductPage';

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Conditionally render header only on the home page */}
      {(location.pathname === "/yaw-page" || location.pathname === "/") && (
        <header className="header">
          <h1>Welcome to My Portfolio</h1>
          <p>Learn more about me and my work!</p>
        </header>
      )}

      <Routes>
        {/* Main Home Page Routes */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/yaw-page" element={
          <>
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        } />

        {/* Individual Project Routes */}
        <Route path="projects/task-manager" element={<TaskManager />} />
        <Route path="projects/weather-dashboard" element={<WeatherDashboard />} />
        <Route path="projects/ecommerce-product-page" element={<EcommerceProductPage />} />
      </Routes>
    </div>
  );
};

export default App;