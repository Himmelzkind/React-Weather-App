import React from "react";
import Search from "./Search.js";
import WeatherToday from "./WeatherToday.js";
import "./main.css";

export default function Main() {
  let weatherData = {
    city: "Tokyo",
    date: "Friday, 01.01.2021"
  };
  return (
    <div className="Main">
      <Search />
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.date}</h2>

      <WeatherToday />
    </div>
  );
}