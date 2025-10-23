const API_URL = "http://localhost:8000";

export const uploadCSV = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to upload CSV");
  return response.json();
};
