import React, { useEffect, useState } from "react";
import Charts from "./Charts";

const Meteostat = () => {
  const [tempData, setTempData] = useState({});
  const [co2Data, setco2Data] = useState({});
  const [methaneData, setMethaneData] = useState({});
  const [nitrousData, setNitrousData] = useState({});
  const [polarData, setPolarData] = useState({});

  async function fetchMeanSurfaceTemperatureChange() {
    const response = await fetch(
      "https://global-warming.org/api/temperature-api"
    );
    const json = await response.json();
    const temperatureData = json["result"];
    setTempData(temperatureData);
  }

  async function fetchMeanCarbonDioxideLevels() {
    const response = await fetch("https://global-warming.org/api/co2-api");
    const json = await response.json();
    const co2Data = json["co2"];
    setco2Data(co2Data);
  }

  async function fetchMethaneLevels() {
    const response = await fetch(" https://global-warming.org/api/methane-api");
    const json = await response.json();
    const methaneData = json["methane"];
    setMethaneData(methaneData);
  }

  async function fetchNitrousLevels() {
    const response = await fetch(
      "https://global-warming.org/api/nitrous-oxide-api"
    );
    const json = await response.json();
    const nitrousData = json["nitrous"];
    setNitrousData(nitrousData);
  }

  async function fetchMeltedPolarCaps() {
    const response = await fetch("https://global-warming.org/api/arctic-api ");
    const json = await response.json();
    const polarData = json["result"];
    setPolarData(polarData);
  }

  // fetch all the data
  useEffect(() => {
    fetchMeanSurfaceTemperatureChange();
    fetchMeanCarbonDioxideLevels();
    fetchMethaneLevels();
    fetchNitrousLevels();
    fetchMeltedPolarCaps();
  }, []);

  return (
    <div>
      <Charts
        tempData={tempData}
        co2Data={co2Data}
        methaneData={methaneData}
        nitrousData={nitrousData}
        polarData={polarData}
      />
    </div>
  );
};

export default Meteostat;
