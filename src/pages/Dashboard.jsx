import React from "react";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const api = "9b176ea0bfec0899a9f8b1d8250ffe11";
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await window.navigator.geolocation.getCurrentPosition(
          savePositionToState
        );
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`
        )
          .then((response) => response.json())
          .then((res) => {
            setTemperature(res.main.temp);
            setCityName(res.name);
            setWeather(res.weather[0].main);
          });
      } catch (err) {
        //handle error
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div>
      <main>
        {weather?.main && (
          <div>
            <h1>{cityName}</h1>
            <h2>{temperature}ºC</h2>
            <h2>{weather}</h2>
          </div>
        )}
      </main>
    </div>
  );
};
