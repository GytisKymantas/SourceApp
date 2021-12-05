import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Rain } from "../../../assets/weatherRainy.svg";
import { ReactComponent as Snow } from "../../../assets/weatherSnow.svg";
import { ReactComponent as Thunderstorm } from "../../../assets/weatherThunderstorm.svg";
import { ReactComponent as Sun } from "../../../assets/weatherSunny.svg";
import { ReactComponent as Cloud } from "../../../assets/weatherCloudy.svg";
import { ReactComponent as Mist } from "../../../assets/weatherMist.svg";
import "./weather-widget.scss";
import { countries } from "country-data";

export const WeatherWidget = () => {
  const api = "9b176ea0bfec0899a9f8b1d8250ffe11";
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  let weatherId,
    windSpeed,
    humidity,
    weather,
    countryCode = null;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(CallAPI);
  }, []);

  const CallAPI = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      });
  };

  weatherId = weatherData?.weather[0].id;
  windSpeed = weatherData?.wind.speed;
  humidity = weatherData?.main.humidity;
  countryCode = weatherData?.sys.country;

  weatherId > 199 && weatherId < 300
    ? (weather = "Thunderstorm")
    : weatherId > 299 && weatherId < 600
    ? (weather = "Rain")
    : weatherId > 599 && weatherId < 700
    ? (weather = "Snow")
    : weatherId > 800 && weatherId < 900
    ? (weather = "Cloudy")
    : weatherId === 800
    ? (weather = "Sunny")
    : (weather = "Mist");
  let options = { weekday: "long", month: "long", day: "numeric" };

  return (
    <div className="test">
      {!loading && (
        <div className="weather-data">
          <div className="weather-data__details">
            <div className="weather-data__location">
              {new Date().toLocaleDateString("en-GB", options)} |{" "}
              {weatherData?.name}, {weatherData && countries[countryCode].name}
            </div>
            <div className="weather-data__temperature">
              {Math.round(weatherData?.main.temp)}
              {"\u00b0"}
            </div>
            <div className="weather-data__description">{weather}</div>
            <div className="weather-data__wind-speed">{windSpeed} m/s</div>
            <div className="weather-data__humidity">{humidity} mm</div>
          </div>
          <div className="weather-data__icon">
            {weather === "Sunny" ? (
              <Sun />
            ) : weather === "Rain" ? (
              <Rain />
            ) : weather === "Snow" ? (
              <Snow />
            ) : weather === "Cloudy" ? (
              <Cloud />
            ) : weather === "Mist" ? (
              <Mist />
            ) : (
              <Thunderstorm />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

WeatherWidget.propTypes = {};
