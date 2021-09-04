import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../styles/charts.css";

const Charts = (props) => {
  var weatherData = props.weatherData;

  const [xLabels, setXLabels] = useState([]);
  const [yLabels, setYLabels] = useState([]);

  // stores our x and y data
  var x_Data = [];
  var y_Data = [];

  function setData() {
    for (let i = 0; i < weatherData.length; i++) {
      x_Data.push(weatherData[i]["time"]);
      y_Data.push(weatherData[i]["station"]);
    }
    setXLabels(x_Data);
    setYLabels(y_Data);
  }

  useEffect(() => {
    if (weatherData != null) {
      setData();
    }
  }, []);

  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Temperature",
        data: yLabels,
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
  return (
    <div className="line-graph">
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
