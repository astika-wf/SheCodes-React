import React from "react";
import "./App.css";
import Weather from "./Weather";
import GithubRepo from "./GithubRepo";


export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="container">
          <Weather defaultCity="Jakarta" />
        </div>
        <div className="github">
        <GithubRepo />
        </div>
      </div>
    </div>
  );
}
