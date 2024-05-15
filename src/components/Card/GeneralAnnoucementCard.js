import React from "react";
import { Box, Typography } from "@mui/material";
import { IoIdCardOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { getDate } from "../../config/Constants";
const GeneralAnnoucementCard = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
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
            {data?.title}
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {data?.content}
          </Typography>
          <Typography
            sx={{
              color: "#848a8c",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {getDate(data?.createdAt)}
          </Typography>

          {/* Display optional image */}
          {data?.image && (
            <img
              src={data.image}
              alt="Image"
              style={{
                width: "100%",
                height: "40%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
          )}
        </Box>

        {/* <Typography
            sx={{
                color: "#848a8c",
                fontSize: "14px",
                marginBottom: "10px",
                }}
            >
              {data?.content}
            </Typography>
            <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginTop: "10px",
                 }}
            >
              {getDate(data?.createdAt)}
            </Typography> */}
      </Box>
    </Box>
  );
};

export default GeneralAnnoucementCard;
