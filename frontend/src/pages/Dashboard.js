import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import ChartDisplay from "../components/ChartDisplay";

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);

  return (
    <div className="dashboard">
      <h1>📈 CSV Data Analyzer</h1>
      <FileUpload onDataReceived={setChartData} />
      <ChartDisplay data={chartData} />
    </div>
  );
};

export default Dashboard;
