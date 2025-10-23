// frontend/src/components/ChartDisplay.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDisplay = ({ data }) => {
  if (!data) return <p>Upload a CSV to see the chart</p>;

  const chartData = {
    labels: data.labels, // from backend
    datasets: [
      {
        label: "Uploaded Data",
        data: data.values, // from backend
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "CSV Chart" },
    },
    scales: {
      x: { type: "category" }, // CategoryScale is now registered
      y: { beginAtZero: true },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default ChartDisplay;
