import { useState } from 'react';
import { Link } from 'react-router-dom';

const WeatherDashboard = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setError(null); // Reset error state on new fetch
      setWeather(null); // Clear previous weather data
      // Geocoding to get latitude and longitude
      const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Fetching weather data using latitude and longitude
      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherResponse.json();

      setWeather({
        name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="project-page">
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}, {weather.country}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      )}

      {/* Back to Home Link */}
      <Link to="/yaw-page" className="back-to-home">
        ← Back to Home
      </Link>
    </div>
  );
};

export default WeatherDashboard;