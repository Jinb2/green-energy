import React, { useEffect, useState } from "react";
import Charts from "./Charts";

const Meteostat = () => {
  const [weatherData, setWeatherData] = useState({});

  // fetch data from this url
  async function fetchMeanSurfaceTemperatureChange() {
    // wait for promise
    const response = await fetch(
      "https://global-warming.org/api/temperature-api"
    );
    const json = await response.json();
    const temperatureData = json["result"];
    setWeatherData(temperatureData);
  }

  useEffect(() => {
    fetchMeanSurfaceTemperatureChange();
  }, []);

  return (
    <div>
      <Charts weatherData={weatherData} />
    </div>
  );
};

export default Meteostat;
