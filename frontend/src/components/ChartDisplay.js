import React from "react";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartDisplay = ({ data, chartType }) => {
  if (!Array.isArray(data) || data.length === 0) return <p>No data to display</p>;

  const firstKey = Object.keys(data[0])[0];
  const secondKey = Object.keys(data[0])[1];

  const labels = data.map((row) => row[firstKey]);
  const values = data.map((row) => Number(row[secondKey]));

  // 🎨 Generate unique colors for each label
  const colors = labels.map(
    (_, i) =>
      `hsl(${(i * 360) / labels.length}, 70%, 60%)` // evenly spaced hues
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: secondKey,
        data: values,
        backgroundColor:
          chartType === "pie" ? colors : "rgba(54, 162, 235, 0.6)",
        borderColor:
          chartType === "pie"
            ? colors
            : "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (chartType === "line") return <Line data={chartData} />;
  if (chartType === "pie") return <Pie data={chartData} />;
  if (chartType === "doughnut") return <Doughnut data={chartData} />;
  if (chartType === "radar") return <Radar data={chartData} />;
  if (chartType === "polarArea") return <PolarArea data={chartData} />;
  if (chartType === "scatter") return <Scatter data={chartData} />;
  return <Bar data={chartData} />;
};

export default ChartDisplay;
