import { WeatherWidget } from "components/atoms/WeatherWidget/WeatherWidget";
import React from "react";

export const Dashboard = () => {
  return (
    <div>
      <main>
        <WeatherWidget />
        {/* {weather?.main && (
          <div>
            <h1>{cityName}</h1>
            <h2>{temperature}ºC</h2>
            <h2>{weather}</h2>
          </div>
        )} */}
      </main>
    </div>
  );
};
