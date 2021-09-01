import React, { useEffect, useState } from "react";
import axios from "axios";
import Charts from "./Charts";

const Meteostat = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  };

  getLocation();

  /*
  const [timeZone, setTimeZone] = useState(null);
  const api_key = "DN4AGLA2I3FN";

  async function fetchTimeZone() {
    const response = await fetch(
      "http://api.timezonedb.com/v2.1/get-time-zone?key=" +
        api_key +
        "&format=json&by=position&lat=+" +
        lat +
        "&lng=" +
        lng
    );
    const json = await response.json();
    setTimeZone(json["zoneName"]);
  }


  // calls function to get timezone
  useEffect(() => {
    if (lat && lng != null) {
      fetchTimeZone();
    }
  }, []);
*/

  const [weatherStation, setWeatherStation] = useState(null);

  // gets weather station id
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://meteostat.p.rapidapi.com/stations/nearby",
      params: { lat: lat, lon: lng, limit: "1" },
      headers: {
        "x-rapidapi-host": "meteostat.p.rapidapi.com",
        "x-rapidapi-key": "126674395fmsh3fd02f6745383ecp173e33jsna2ed6cc5bbf8",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("Request successful!");
        setWeatherStation(response.data["data"][0]["id"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [weatherData, setWeatherData] = useState({});
  // gets station climate data for multiple years
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://meteostat.p.rapidapi.com/stations/normals",
      params: { station: weatherStation },
      headers: {
        "x-rapidapi-host": "meteostat.p.rapidapi.com",
        "x-rapidapi-key": "126674395fmsh3fd02f6745383ecp173e33jsna2ed6cc5bbf8",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Charts weatherData={weatherData} />
    </div>
  );
};

export default Meteostat;
