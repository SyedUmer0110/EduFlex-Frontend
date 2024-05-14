import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ApplyForm from "./ApplyForm";
import { downloadApplications } from "../../api/jobs/JobServices";
import { attachToken, base_url } from "../../config/Constants";

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

const ScholarshipCard = ({ data }) => {
 
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
          sx={{ color: "#d4d4d4", fontSize: "12px", fontWeight: 600 }}
        >
          {data?.createdAt}
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
            Funder - ${data?.provider}
          </Typography>
          
          <Typography
            sx={{ color: "#000000", fontSize: "14px", fontWeight: 500 }}
          >
            Deadline - {data?.deadline}
          </Typography>
        </Box>
       
        
        <Typography
          sx={{ color: "#848a8c", fontSize: "14px", marginTop: "10px" }}
        >
          {data?.description}
        </Typography>

        <Typography
          sx={{ color: "#848a8c", fontSize: "14px", marginTop: "10px" }}
        >
          Criteria - {data?.eligibilityCriteria}
        </Typography>
      </Box>
       
      
    </Box>
  );
};

export default ScholarshipCard;
