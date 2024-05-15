import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { IoIdCardOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";

const AnnouncementCard = ({ data }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <Box
      sx={{
        border: "1px solid #dadce0",
        borderRadius: "8px",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Box
        sx={{
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
          <Typography>{data?.content}</Typography>
        </Box>

        <SlOptionsVertical style={{ cursor: "pointer", color: "#5f6368" }} onClick={() => setShowCommentBox(!showCommentBox)} />
      </Box>

      {showCommentBox && (
        <Box
          sx={{
            margin: "5px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input placeholder="Comment" className="comment_input" />
          <IoMdSend />
        </Box>
      )}
    </Box>
  );
};

export default AnnouncementCard;
