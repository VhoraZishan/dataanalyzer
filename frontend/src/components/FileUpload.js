// frontend/src/components/FileUpload.js
import React from "react";

const FileUpload = ({ onDataReceived }) => {   // <-- add prop here
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/upload", {
  method: "POST",
  body: formData,
});

const data = await res.json();
    onDataReceived(data);  // <-- now this is defined
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
};

export default FileUpload;
