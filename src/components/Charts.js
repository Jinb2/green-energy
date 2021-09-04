import React from "react";
import { Line } from "react-chartjs-2";

const Charts = (props) => {
  var weatherData = props.weatherData;

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Temperature",
        data: [12, 19, 3, 5, 2, -3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
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
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
