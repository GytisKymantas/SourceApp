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
import { countries } from "country-data";

import "./weather-widget.scss";

export const WeatherWidget = ({ time }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(true);
  let weatherId,
    windSpeed,
    humidity,
    weather,
    countryCode,
    sunset,
    sunrise = null;
  const errorCallback = () => setWeatherError(true);

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
        if (data.cod === 200) {
          setWeatherData(data);
          setLoading(false);
          setWeatherError(false);
        } else {
          setWeatherError(true);
          setLoading(false);
        }
      });
  };

  if (weatherData && weatherData.cod === 200) {
    weatherId = weatherData.weather[0].id;
    windSpeed = weatherData.wind.speed;
    humidity = weatherData.main.humidity;
    countryCode = weatherData.sys.country;
    sunset = new Date(weatherData.sys.sunset * 1000);
    sunrise = new Date(weatherData.sys.sunrise * 1000);
  }

  const options = { weekday: "long", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-GB", options);

  const descriptionSelector = (weatherId) => {
    switch (weatherId) {
      case weatherId > 199 && weatherId < 300:
        return "Thunderstorm";
      case weatherId > 299 && weatherId < 600:
        return "Rain";
      case weatherId > 599 && weatherId < 700:
        return "Snow";
      case weatherId > 800 && weatherId < 900:
        return "Cloudy";
      case weatherId === 800:
        return "Clear sky";
      default:
        return "Mist";
    }
  };

  const weatherIconSelector = (weather, time) => {
    switch (weather) {
      case "Cloudy":
        switch (time) {
          case time < sunset && time > sunrise:
            return <CloudDay />;
          default:
            return <CloudNight />;
        }
      case "Clear sky":
        switch (time) {
          case time < sunset && time > sunrise:
            return <ClearDay />;
          default:
            return <ClearNight />;
        }
      case "Thunderstorm":
        return <Thunderstorm />;
      case "Mist":
        return <Mist />;
      case "Rain":
        return <Rain />;
      default:
        return <Snow />;
    }
  };

  return (
    <>
      {loading ||
        (weatherError && (
          <div className="weather-data__invisible">
            <div className="weather-data__invisible-box">
              <p> No weather information available &#9785;</p>
              <p>
                Make sure location services are enabled on your browser settings
              </p>
            </div>
          </div>
        ))}
      {!loading && !weatherError && (
        <div className="weather-data">
          <div className="weather-data__box">
            <div className="weather-data__location">
              {today} | {weatherData?.name},{" "}
              {weatherData && countries[countryCode].name}
            </div>
            <div className="weather-data__details">
              <div className="weather-data__details-main">
                <span>
                  {Math.round(weatherData?.main.temp)}
                  {"\u00b0"}
                </span>
                <span>{descriptionSelector(weatherId)}</span>
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
            {weatherIconSelector(descriptionSelector(weather), time)}
          </div>
        </div>
      )}
    </>
  );
};

WeatherWidget.propTypes = {
  time: PropTypes.object,
};
