import React from "react";
import { Box, Typography } from "@mui/material";
import { IoIdCardOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const FeedbackCard = ({ data }) => {
    return (
        <Box
          sx={{
            border: "1px solid #dadce0",
            borderRadius: "8px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
            <Box
              sx={{
                background: "#1e8e3e",
                width: "max-content",
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIdCardOutline
                style={{ width: "24px", height: "24px", color: "white" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>

           <Typography
                sx={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "10px",
                }}
            >
            {data?.course?.course_name}
         </Typography>

         <Typography
                sx={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 300,
                marginBottom: "10px",
                }}
            >
            {data?.lecture?.topic}
         </Typography>
          <Typography
            sx={{
                color:"#000000",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {data?.feedback}
          </Typography>
        </Box>
           
        

          </Box>
    
        </Box>
      );
};

export default FeedbackCard;
