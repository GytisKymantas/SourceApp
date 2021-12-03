import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Rain } from "../../../assets/weatherRainy.svg";
import { ReactComponent as Snow } from "../../../assets/weatherSnow.svg";
import { ReactComponent as Thunderstorm } from "../../../assets/weatherThunderstorm.svg";
import { ReactComponent as Sun } from "../../../assets/weatherSunny.svg";
import { ReactComponent as Cloud } from "../../../assets/weatherCloudy.svg";

export const WeatherWidget = () => {
  const api = "9b176ea0bfec0899a9f8b1d8250ffe11";
  const [weatherData, setWeatherData] = useState(null);
  let lat = 0;
  let long = 0;
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
  let weatherId = null;
  let windSpeed = null;
  let humidity = null;
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
  return (
    <div>
      {weatherData ? (
        <div>
          <p>City Name: {weatherData?.name}</p>
          <p>
            Temprature: {Math.round(weatherData?.main.temp)}
            {"\u00b0"}
          </p>
          {weatherId > 199 && weatherId < 300 ? (
            <Thunderstorm />
          ) : weatherId > 299 && weatherId.id < 600 ? (
            <Rain />
          ) : weatherId > 599 && weatherId < 700 ? (
            <Snow />
          ) : weatherId > 799 && weatherId < 900 ? (
            <Cloud />
          ) : (
            <Sun />
          )}
          <p>ID:{weatherData.weather[0].id}</p>
          <p>Wind speed: {windSpeed} m/s</p>
          <p>Humidity: {humidity} mm</p>

          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

WeatherWidget.propTypes = {};
