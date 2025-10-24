import React from "react";

const FileUpload = ({ onDataReceived }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      const response = await res.json();
      if (!response.data) throw new Error("Invalid response");

      onDataReceived(response.data, file.name);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Error uploading or parsing CSV file");
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
