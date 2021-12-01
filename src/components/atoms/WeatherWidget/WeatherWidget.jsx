import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const WeatherWidget = () => {
  const api = "9b176ea0bfec0899a9f8b1d8250ffe11";
  const [data, setData] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const errorCallback = () => "loading";
  navigator.geolocation.getCurrentPosition(savePositionToState, errorCallback, {
    timeout: 1000,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const newUserPos = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      };
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`
    )
      .then((response) => response.json())
      .then(
        (res) => {
          setData(res);
          console.log(res);
        },

        (error) => {
          // handle error here
        }
      );
  }, [latitude, longitude]);

  return (
    <div>
      {data ? (
        <div>
          <p>City Name: {data.name}</p>
          <p>Temprature: {data.main.temp}</p>
          <p>Sunrise: {data.sys.sunrise}</p>
          <p>Sunset: {data.sys.sunset}</p>
          <p>Description: {data.weather[0].description}</p>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

WeatherWidget.propTypes = {};
