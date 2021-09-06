import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../styles/charts.css";

const Charts = (props) => {
  var tempData = props.tempData;
  var co2Data = props.co2Data;
  var methaneData = props.methaneData;
  var nitrousData = props.nitrousData;
  var polarData = props.polarData;

  const [tempYear, setTempYear] = useState([]);
  const [temp, setTemp] = useState([]);

  const [co2Year, setco2Year] = useState([]);
  const [co2, setCO2] = useState([]);

  const [methaneYear, setMethaneYear] = useState([]);
  const [methane, setMethane] = useState([]);

  const [nitrousYear, setNitrousYear] = useState([]);
  const [nitrous, setNitrous] = useState([]);

  const [polarYear, setPolarYear] = useState([]);
  const [polarExtent, setPolarExtent] = useState([]);
  const [polarArea, setPolarArea] = useState([]);

  // temperature levels
  useEffect(() => {
    if (tempData != null) {
      let tempYear_Data = [];
      let temp_Data = [];
      for (let i = 0; i < tempData.length; i++) {
        tempYear_Data.push(Math.trunc(tempData[i]["time"]));
        temp_Data.push(tempData[i]["station"]);
      }

      setTempYear(tempYear_Data);
      setTemp(temp_Data);
    }
  }, [tempData]);

  // co2 levels
  useEffect(() => {
    if (co2Data != null) {
      let co2Year_Data = [];
      let co2Level_Data = [];
      for (let i = 0; i < co2Data.length; i++) {
        co2Year_Data.push(co2Data[i]["year"]);
        co2Level_Data.push(co2Data[i]["cycle"]);
      }
      setco2Year(co2Year_Data);
      setCO2(co2Level_Data);
    }
  }, [co2Data]);

  // methane levels
  useEffect(() => {
    if (methaneData != null) {
      let methaneYear_Data = [];
      let methane_Data = [];
      for (let i = 0; i < methaneData.length; i++) {
        methaneYear_Data.push(Math.trunc(methaneData[i]["date"]));
        methane_Data.push(methaneData[i]["trend"]);
      }
      setMethaneYear(methaneYear_Data);
      setMethane(methane_Data);
    }
  }, [methaneData]);

  // nitrous levels
  useEffect(() => {
    if (nitrousData != null) {
      let nitrousYear_Data = [];
      let nitrous_Data = [];
      for (let i = 0; i < nitrousData.length; i++) {
        nitrousYear_Data.push(Math.trunc(nitrousData[i]["date"]));
        nitrous_Data.push(nitrousData[i]["average"]);
      }
      setNitrousYear(nitrousYear_Data);
      setNitrous(nitrous_Data);
    }
  }, [nitrousData]);

  // polar cap levels
  useEffect(() => {
    if (polarData != null) {
      let polarYear_Data = [];
      let polarExtent_Data = [];
      let polarArea_Data = [];
      for (let i = 0; i < polarData.length; i++) {
        polarYear_Data.push(polarData[i]["year"]);
        polarExtent_Data.push(polarData[i]["extent"]);
        polarArea_Data.push(polarData[i]["area"]);
      }
      setPolarYear(polarYear_Data);
      setPolarExtent(polarExtent_Data);
      setPolarArea(polarArea_Data);
    }
  }, [polarData]);

  const data = {
    labels: tempYear,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Celsius",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  const data2 = {
    labels: co2Year,
    datasets: [
      {
        label: "Carbon Dioxide",
        data: co2,
        fill: false,
        backgroundColor: "rgb(0,0,255)",
        borderColor: "rgb(0,0,255)",
      },
    ],
  };

  const options2 = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Part Per million (ppm)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  const data3 = {
    labels: methaneYear,
    datasets: [
      {
        label: "Methane",
        data: methane,
        fill: false,
        backgroundColor: "rgb(0,0,255)",
        borderColor: "rgb(0,0,255)",
      },
    ],
  };

  const options3 = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Part Per million (ppm)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  const data4 = {
    labels: nitrousYear,
    datasets: [
      {
        label: "Nitrous Oxide",
        data: nitrous,
        fill: false,
        backgroundColor: "rgb(255,165,0)",
        borderColor: "rgb(255,165,0)",
      },
    ],
  };

  const options4 = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Nitrous Oxide mole fraction (ppb)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  const data5 = {
    labels: polarYear,
    datasets: [
      {
        label: "Extent",
        data: polarExtent,
        fill: false,
        backgroundColor: "rgba(137, 196, 244, 1)",
        borderColor: "rgba(137, 196, 244, 1)",
      },
      {
        label: "Area",
        data: polarArea,
        fill: false,
        backgroundColor: "rgba(30, 139, 195, 1)",
        borderColor: "rgba(30, 139, 195, 1)",
      },
    ],
  };

  const options5 = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Million square km",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  return (
    <div className="line-graph">
      <h1>Global temperature anomalies from year 1880 to present</h1>
      <Line data={data} options={options} />
      <p class="explanation"></p>
      <h1>Carbon Dioxide levels from 2011 to present</h1>
      <Line data={data2} options={options2} />
      <p class="explanation"></p>
      <h1>Methane levels from 1983 to present</h1>
      <Line data={data3} options={options3} />
      <h1>Nitrous Oxide levels from 2001 to present </h1>
      <Line data={data4} options={options4} />
      <h1>Melted Polar Ice Caps</h1>
      <Line data={data5} options={options5} />
    </div>
  );
};

export default Charts;
