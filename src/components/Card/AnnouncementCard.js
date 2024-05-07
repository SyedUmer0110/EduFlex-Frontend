import React from "react";
import { Box, Typography } from "@mui/material";

import { IoIdCardOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const AnnouncementCard = () => {
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
        <Typography>
          Teacher Uploaded a new material: Lecture Slides 7
        </Typography>
      </Box>

      <SlOptionsVertical style={{ cursor: "pointer", color: "#5f6368" }} />
    </Box>
  );
};

export default AnnouncementCard;
