import React, { useState } from "react";
import axios from "axios";
import "../WeatherApp.css";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = "5e82273af3754cfd8e0105803242608"; // Replace with your OpenWeatherMap API key

    const getWeather = async () => {
        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
            );
            setWeather(response.data);
            setError(null); // Clear any previous errors
        } catch (err) {
            setError("City not found");
            setWeather(null); // Clear weather data if error occurs
        }
        
    };
    console.log(weather);
    
    
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        if (city) {
            getWeather();
        }
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Get Weather</button>

            {error && <p className="error">{error}</p>}

            {weather && (
                <div className="weather-info">
                     <h2>{weather.location.name}, {weather.location.country}</h2>
                    <p>{weather.current.temp_c}°C</p>
                    <p>{weather.current.condition.text}</p>
                    <p>Humidity: {weather.current.humidity}%</p>
                    <img src={`${weather.current.condition.icon}`} alt="" />

                </div>
            )}
        </div>
    );
}

export default WeatherApp;
