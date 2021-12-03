import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Rain } from "../../../assets/weatherRainy.svg";
import { ReactComponent as Snow } from "../../../assets/weatherSnow.svg";
import { ReactComponent as Thunderstorm } from "../../../assets/weatherThunderstorm.svg";
import { ReactComponent as Sun } from "../../../assets/weatherSunny.svg";
import { ReactComponent as Cloud } from "../../../assets/weatherCloudy.svg";
import "./weather-widget.scss";

export const WeatherWidget = () => {
  const api = "9b176ea0bfec0899a9f8b1d8250ffe11";
  const [weatherData, setWeatherData] = useState(null);
  let lat,
    long = 0;
  let weatherId,
    windSpeed,
    humidity,
    weather = null;

  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
    )
      .then((response) => response.json())
      .then(
        (res) => {
          setWeatherData(res);
        },

        (error) => {
          // handle error here
        }
      );
  }, [lat, long]);

  weatherId = weatherData?.weather[0].id;
  windSpeed = weatherData?.wind.speed;
  humidity = weatherData?.main.humidity;

  weatherId > 199 && weatherId < 300
    ? (weather = "Thunderstorm")
    : weatherId > 299 && weatherId < 600
    ? (weather = "Rain")
    : weatherId > 599 && weatherId < 700
    ? (weather = "Snow")
    : weatherId > 799 && weatherId < 900
    ? (weather = "Cloudy")
    : (weather = "Sunny");

  return (
    <div>
      {weatherData ? (
        <div className="weather-data">
          <p className="weather-data__city">{weatherData?.name}</p>
          <p className="weather-data__temperature">
            {Math.round(weatherData?.main.temp)}
            {"\u00b0"}
          </p>
          <p className="weather-data__icon">
            {weather === "Sunny" ? (
              <Sun />
            ) : weather === "Rain" ? (
              <Rain />
            ) : weather === "Snow" ? (
              <Snow />
            ) : weather === "Cloudy" ? (
              <Cloud />
            ) : (
              <Thunderstorm />
            )}
          </p>
          <p className="weather-data__wind-speed">{windSpeed} m/s</p>
          <p className="weather-data__humidity">{humidity} mm</p>
          <p className="weather-data__description">{weather}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

WeatherWidget.propTypes = {};
