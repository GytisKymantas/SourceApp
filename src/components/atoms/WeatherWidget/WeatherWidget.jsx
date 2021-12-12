import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Rain } from "../../../assets/weatherRainy.svg";
import { ReactComponent as Snow } from "../../../assets/weatherSnow.svg";
import { ReactComponent as Thunderstorm } from "../../../assets/weatherThunderstorm.svg";
import { ReactComponent as ClearDay } from "../../../assets/weatherClearSun.svg";
import { ReactComponent as ClearNight } from "../../../assets/weatherClearMoon.svg";
import { ReactComponent as CloudDay } from "../../../assets/weatherCloudySun.svg";
import { ReactComponent as CloudNight } from "../../../assets/weatherCloudyMoon.svg";
import { ReactComponent as Mist } from "../../../assets/weatherMist.svg";
import { ReactComponent as Divider } from "../../../assets/divider.svg";
import { ReactComponent as DropIcon } from "../../../assets/dropletIcon.svg";
import { ReactComponent as WindIcon } from "../../../assets/windIcon.svg";
import PropTypes from "prop-types";
import "./weather-widget.scss";
import { countries } from "country-data";

export const WeatherWidget = ({ time }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  let weatherId,
    windSpeed,
    humidity,
    weather,
    countryCode = null;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(CallAPI, errorCallback);
  }, []);

  const CallAPI = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      });
  };

  const errorCallback = (error) => alert("Location permission not granted");

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
    ? (weather = "Clear sky")
    : (weather = "Mist");

  const options = { weekday: "long", month: "long", day: "numeric" };
  const sunset = new Date(weatherData?.sys.sunset * 1000);
  const sunrise = new Date(weatherData?.sys.sunrise * 1000);

  return (
    <>
      {!loading && (
        <div className="weather-data">
          <div className="weather-data__box">
            <div className="weather-data__location">
              {new Date().toLocaleDateString("en-GB", options)} |{" "}
              {weatherData?.name}, {weatherData && countries[countryCode].name}
            </div>
            <div className="weather-data__details">
              <div className="weather-data__details-main">
                <span>
                  {Math.round(weatherData?.main.temp)}
                  {"\u00b0"}
                </span>
                <span>{weather}</span>
              </div>
              <Divider />
              <div className="weather-data__details-secondary">
                <span>
                  <WindIcon /> {windSpeed} m/s
                </span>
                <span>
                  <DropIcon />
                  {humidity} mm
                </span>
              </div>
            </div>
          </div>
          <div className="weather-data__icon">
            {weather === "Clear sky" ? (
              time < sunset && time > sunrise ? (
                <ClearDay />
              ) : (
                <ClearNight />
              )
            ) : weather === "Rain" ? (
              <Rain />
            ) : weather === "Snow" ? (
              <Snow />
            ) : weather === "Cloudy" ? (
              time < sunset && time > sunrise ? (
                <CloudDay />
              ) : (
                <CloudNight />
              )
            ) : weather === "Mist" ? (
              <Mist />
            ) : (
              <Thunderstorm />
            )}
          </div>
        </div>
      )}
    </>
  );
};

WeatherWidget.propTypes = {
  time: PropTypes.object,
};
