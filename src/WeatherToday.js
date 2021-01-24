import React from "react";
import "./weathertoday.css";

export default function WeatherToday() {
  let weatherData = {
    imgUrl: "",
    description: "clear",
    temperature: 10,
    humidity: 40,
    windspeed: 10
  };
  return (
    <div className="weatherToday">
      <img
        id="icon-main"
        src={weatherData.imgUrl}
        alt={weatherData.description}
      />
      <strong id="currentTemp">{weatherData.temperature}</strong>
      <span className="units">
        <button className="celsius-link" href="/">°C</button>
        <button className="fahrenheit-link" href="#">°F</button>

      </span>
      <p id="humidity_wind">
        {weatherData.humidity} | {weatherData.windspeed}
      </p>
    </div>
  );
}
