import React, { useState } from "react";
import { uploadFile } from "../api/demoUpload";

const PdfUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can now upload `selectedFile` to your server or process it in any way you want.
    // For example, you can use FormData to upload it via AJAX.
    if (selectedFile) {
      const formData = new FormData();
      formData.append("title", "Test title");
      formData.append("document", selectedFile);

      uploadFile(formData);

      // Example of uploading using fetch API
      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle response
        })
        .catch((error) => {
          // Handle error
        });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "1rem",
      }}
    >
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          border: "1px solid black",
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
        }}
      />
      <button
        onClick={handleUpload}
        style={{
          width: "max-content",
          background: "var(--primary)",
          border: "none",
          fontSize: "16px",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Upload PDF
      </button>
    </div>
  );
};

export default PdfUploader;
