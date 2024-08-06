import React, { useState, useEffect } from 'react';
import sunnyday from '../components/image/sunnyday.jpg'
import rainy from '../components/image/rainy.jpg'
import icy from '../components/image/icey.jpg'

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('London');
  const [apiKey, setApiKey] = useState('2cf89abc92c3eaab9a2d414dc81ef394');
  const [error, setError] = useState(null);
  const [image, setImage] = useState(sunnyday)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
        if (data.main.temp > 25) {
          setImage(sunnyday)
        } else if (data.main.temp < 24) {
          setImage(rainy)
        } else {
          setImage(icy)
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchWeatherData();
  }, [city, apiKey]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = (e) => {
    e.preventDefault();
    // You can add logic here to handle the button click
  };

  return (
    <div className='weatherapp'>
      <img src={image}/>
      <form onSubmit={handleGetWeather}>
        <input type="text" value={city} onChange={handleCityChange} />
        <button>Get Weather</button>
      </form>
      
        {
        weatherData && weatherData.main && (
          <div>
            <h2>Current Weather</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )
      }
    </div>
  );
}

export default WeatherApp;