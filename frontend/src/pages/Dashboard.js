import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import ChartDisplay from "../components/ChartDisplay";

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState("bar");
  const [fileName, setFileName] = useState("");
  const [showChart, setShowChart] = useState(false);

  const handleDataReceived = (data, name) => {
    setChartData(data);
    setFileName(name);
    setShowChart(false);
  };

  const handleGenerateChart = () => {
    if (!chartData) return alert("Please upload a CSV first!");
    setShowChart(true);
  };

  return (
    <div className="dashboard">
      <h1>📈 CSV Data Analyzer</h1>
      <FileUpload onDataReceived={handleDataReceived} />

      <div style={{ marginTop: "1rem" }}>
        <label>Select Chart Type: </label>
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
  <option value="bar">Bar</option>
  <option value="line">Line</option>
  <option value="pie">Pie</option>
  <option value="doughnut">Doughnut</option>
  <option value="radar">Radar</option>
  <option value="polarArea">Polar Area</option>
  <option value="scatter">Scatter</option>
</select>


        <button onClick={handleGenerateChart} style={{ marginLeft: "1rem" }}>
          Generate Chart
        </button>
      </div>

      {showChart && (
        <div style={{ marginTop: "2rem" }}>
          <h3>{fileName || "Uploaded Data"}</h3>
          <ChartDisplay data={chartData} chartType={chartType} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
