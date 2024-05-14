import React from "react";
import { Box, Typography } from "@mui/material";

const UpdatesCard = ({ data }) => {
  return (
    <Box
      sx={{
        width: "40%",
        background: "#ffffff",
        padding: "20px",
        boxShadow: "0px 0px 36px -3px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <Typography
        sx={{
          color: "#000000",
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {data?.title}
      </Typography>

      <Typography
        sx={{
          color: "#000000",
          fontSize: "12px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {data?.createdAt}
      </Typography>

      {data?.societyName && (
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          Society Name - ${data?.societyName}
        </Typography>
      )}

     
      {data?.content && (
        <Typography
          sx={{
            color: "#848a8c",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          {data?.content}
        </Typography>
      )}

     
      {/* Display optional image */}
      {data?.image && (
        <img
          src={data.image}
          alt="Image"
          style={{ width: "100%", height:"40%", borderRadius: "10px", marginBottom: "10px" }}
        />
      )}

      {/* Display optional video (embedded or linked) */}
      {data?.video && (
        <div
          style={{
            width: "100%",
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio (adjust as needed)
            marginBottom: "10px",
          }}
        >
          <iframe
            src={data.video}
            title="Video"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              borderRadius: "10px",
            }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </Box>
  );
};

export default UpdatesCard;
