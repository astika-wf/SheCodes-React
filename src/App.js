import React from "react";
import "./App.css";
import Weather from "./Weather";
import GithubRepo from "./GithubRepo";
import WeatherForecast from "./WeatherForecast.js";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="container">
          <Weather defaultCity="Jakarta" />
        </div>
           <div className="row">
           <div className="WeatherForecast">
           </div>
        <GithubRepo />
      </div>
    </div>
  );
}
