import { useEffect, useState } from "react";

const FileViewer = ({ base64String }) => {
    const [fileData, setFileData] = useState(null);
  
    useEffect(() => {
      // Decode the Base64 string
      const decodedData = atob(base64String);
      setFileData(decodedData);
    }, [base64String]);
  
    // Check if file data is available
    if (!fileData) {
      return <div>Loading...</div>;
    }
  
    // Assuming it's a PDF file, you can embed it using an iframe
    return (
      <div>
        <iframe
          title="file-preview"
          src={`data:application/pdf;base64,${btoa(fileData)}`}
          width="100%"
          height="500px"
        />
      </div>
    );
  };
  
  export default FileViewer;