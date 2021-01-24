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
        <a href="" id="celsius-link" className="active">
          °C
        </a>

        <a href="" id="fahrenheit-link">
          °F
        </a>
      </span>
      <p id="humidity_wind">
        {weatherData.humidity} | {weatherData.windspeed}
      </p>
    </div>
  );
}
