import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ApplyForm from "./ApplyForm";
import { downloadApplications } from "../../api/jobs/JobServices";
import { attachToken } from "../../config/Constants";

// {
//     "id": 1,
//     "company_name": "Tech Solutions Inc.",
//     "created_at": "2024-05-12T08:00:00Z",
//     "description": "We are looking for a skilled software engineer to join our team.",
//     "job_type": "Full-time",
//     "location": "San Francisco, CA",
//     "title": "Software Engineer",
//     "admin_id": 1234
//   },

const JobCard = ({ data }) => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const handleApplyClick = () =>{
      setShowApplyForm(true);
  }
  const handleCloseForm = () =>{
      setShowApplyForm(false);
  }

  const handleDownloadsApplications = async () => {
    const token = localStorage.getItem('token');
    try {
     
      const response = await fetch(`http://localhost:8080/api/jobs/download/${data?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/zip',
          'Authorization': `Bearer ${token}`   // Ensure correct content type for the response
        },
        responseType: 'blob', // Specify responseType as 'blob' if available
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'files.zip';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      // Handle error
    }

  }
  return (
    <Box
      sx={{
        width: "100%",
        background: "#ffffff",
        minHeight: "180px",
        padding: "20px 30px",
        boxShadow: "0px 0px 36px -3px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ color: "#d4d4d4", fontSize: "12px", fontWeight: 600 }}
        >
          {data?.created_at}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ color: "#000000", fontSize: "20px", fontWeight: 600 }}
          >
            {data?.title}
          </Typography>
          <Typography
            sx={{
              borderRadius: "20px",
              padding: "5px 30px",
              background:
                data?.job_type?.toLowerCase() === "full-time"
                  ? "#82e5b1"
                  : "#cc3700",
              color: "#ffffff",
            }}
          >
            {data?.job_type}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "5px",
          }}
        >
          <Typography
            sx={{ color: "#000000", fontSize: "14px", fontWeight: 500 }}
          >
            {data?.company_name}
          </Typography>
          -
          <Typography
            sx={{ color: "#000000", fontSize: "14px", fontWeight: 500 }}
          >
            {data?.location}
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#848a8c", fontSize: "14px", marginTop: "10px" }}
        >
          {data?.description}
        </Typography>
      </Box>
      
      <Button className="apply_now_btn" onClick={handleApplyClick}>Apply</Button>
      <Button className="apply_now_btn" onClick={handleDownloadsApplications}>Download Applications</Button>
  
      {showApplyForm && (
        <ApplyForm
        open={showApplyForm}
        handleClose={handleCloseForm}
        jobTitle={data?.title} // Pass job title to the ApplyForm component
        jobId = {data?.id}
      />
      )}
      
      
    </Box>
  );
};

export default JobCard;
