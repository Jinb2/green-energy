import React, { useEffect, useState } from "react";

const Charts = () => {
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

  useEffect(() => {
    if (lat && lng != null) {
      fetchTimeZone();
    }
  }, []);

  return <div></div>;
};

export default Charts;
