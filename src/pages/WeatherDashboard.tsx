import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/WeatherDashboard.css';

const WeatherDashboard = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const getBackgroundImage = (weatherCode: number): string => {
    if (weatherCode === 0) return '/yaw-page/Sunny_day.webp';
    if (weatherCode >= 1 && weatherCode <= 3) return '/yaw-page/Cloudy_day.webp';
    if (weatherCode >= 45 && weatherCode <= 48) return '/yaw-page/Stormy_day.webp';
    if (weatherCode >= 51 && weatherCode <= 67) return '/yaw-page/Rainy_day.webp';
    if (weatherCode >= 71 && weatherCode <= 86) return '/yaw-page/Snowy_day.webp';
    return '/yaw-page/default_image.webp';
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      setWeather(null);

      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found');
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      const weatherData = await weatherResponse.json();

      const weatherCode = weatherData.current_weather.weathercode;
      setWeather({
        name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherCode,
        daily: weatherData.daily,
      });
      setBackgroundImage(getBackgroundImage(weatherCode));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`weather-dashboard ${weather ? 'weather-loaded' : ''}`}
      style={{
        backgroundImage: weather
          ? `url(${backgroundImage})`
          : `url('/yaw-page/Weather_Dashboard.webp')`,
      }}
    >
      <h2 className="dashboard-title">Weather Dashboard</h2>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
          placeholder="Enter city"
        />
        <button className="fetch-button" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {weather && (
        <div className="weather-details">
          <h3 className="weather-location">
            {weather.name}, {weather.country}
          </h3>
          <p className="weather-info">Temperature: {weather.temperature}°C</p>
          <p className="weather-info">Wind Speed: {weather.windspeed} km/h</p>
          {weather?.daily && (
            <div className="forecast">
              <h4 className="forecast-title">7-Day Forecast</h4>
              <div className="forecast-grid">
                {weather.daily.time.map((day: string, index: number) => {
                  const dailyWeatherCode = weather.daily.weathercode[index];
                  const dailyBackgroundImage = getBackgroundImage(dailyWeatherCode);
                  return (
                    <div
                      key={index}
                      className="forecast-card"
                      style={{
                        backgroundImage: `url(${dailyBackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <p>{new Date(day).toLocaleDateString()}</p>
                      <p>Max Temp: {weather.daily.temperature_2m_max[index]}°C</p>
                      <p>Min Temp: {weather.daily.temperature_2m_min[index]}°C</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Conditional rendering for the button */}
      {weather ? (
        <button
          className="back-to-home"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      ) : (
        <Link to="/" className="back-to-home">
          ← Back to Home
        </Link>
      )}
    </div>
  );
};

export default WeatherDashboard;