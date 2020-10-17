import React from "react";
import "./WeatherCards";
import "./App.css";
import WeatherCards from "./WeatherCards";

function App() {
  return (
    <div className="App">
      <div id="weather-cont">
        <WeatherCards />
      </div>
    </div>
  );
}

export default App;
