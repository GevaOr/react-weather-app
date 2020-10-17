import React, { useState } from "react";
import "./App.css";

function WeatherCards() {
  const [weatherDays, setWeatherDays] = useState([
    {
      id: "1",
      day: "sun",
      weatherType: "sunny",
      maxTemp: "24",
      minTemp: "16",
    },
    {
      id: "2",
      day: "mon",
      weatherType: "sunny_s_cloudy",
      maxTemp: "20",
      minTemp: "12",
    },
    {
      id: "3",
      day: "tue",
      weatherType: "partly_cloudy",
      maxTemp: "18",
      minTemp: "10",
    },
    {
      id: "4",
      day: "wed",
      weatherType: "cloudy",
      maxTemp: "16",
      minTemp: "10",
    },
    {
      id: "5",
      day: "thu",
      weatherType: "rain_light",
      maxTemp: "15",
      minTemp: "8",
    },
    {
      id: "6",
      day: "fri",
      weatherType: "snow_s_rain",
      maxTemp: "3",
      minTemp: "-1",
    },
    {
      id: "7",
      day: "sat",
      weatherType: "snow_light",
      maxTemp: "-2",
      minTemp: "-4",
    },
    {
      id: "8",
      day: "sun",
      weatherType: "snow",
      maxTemp: "-1",
      minTemp: "-4",
    },
  ]);
  return weatherDays.map((wDay) => {
    function titleStr(str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    }
    return (
      <div className="weather-card" key={wDay.id}>
        <div className="weather-day">{titleStr(wDay.day)}</div>
        <img
          className="weather-image"
          src={require(`./media/${wDay.weatherType}.png`)}
          alt={wDay.weatherType}
        />
        <div className="weather-degrees">
          <span className="degrees-max">{wDay.maxTemp}°</span>
          <span className="degrees-min">{wDay.minTemp}°</span>
        </div>
      </div>
    );
  });
}

export default WeatherCards;
