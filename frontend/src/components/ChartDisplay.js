import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartDisplay = ({ data, chartType }) => {
  if (!Array.isArray(data) || data.length === 0) return <p>No data to display</p>;

  const firstKey = Object.keys(data[0])[0];
  const secondKey = Object.keys(data[0])[1];

  const labels = data.map((row) => row[firstKey]);
  const values = data.map((row) => Number(row[secondKey]));

  const chartData = {
    labels,
    datasets: [
      {
        label: secondKey,
        data: values,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (chartType === "line") return <Line data={chartData} />;
  if (chartType === "pie") return <Pie data={chartData} />;
  return <Bar data={chartData} />;
};

export default ChartDisplay;
