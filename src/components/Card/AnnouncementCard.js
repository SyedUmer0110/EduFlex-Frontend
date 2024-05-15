import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { IoIdCardOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";
import {
  addAnnouncementComment,
  getAnnouncementComments,
} from "../../api/classroom/ClassroomServices";

const AnnouncementCard = ({ data }) => {
  console.log("data", data);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const res = await getAnnouncementComments(data?.id);
    console.log("comments data", res);
    if (res) {
      setComments(res);
    }
  };

  const createCommentHandler = async () => {
    const payload = {
      id: data?.id,
      comment: comment,
    };
    const res = await addAnnouncementComment(payload);

    if (res) {
      setComment("");
      getComments();
    }
  };

  useEffect(() => {
    if (data?.id && showCommentBox && comments?.length == 0) {
      getComments();
    }
  }, [showCommentBox]);

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

        <SlOptionsVertical
          style={{ cursor: "pointer", color: "#5f6368" }}
          onClick={() => setShowCommentBox(!showCommentBox)}
        />
      </Box>

      {showCommentBox && (
        <>
          {comments?.length > 0 && (
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "0.6rem" }}
            >
              {comments?.map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>
                    {item?.commentedBy?.fullName || item?.commentedByT?.fullName}
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>{item.msg}</Typography>
                </Box>
              ))}
            </Box>
          )}

          <Box
            sx={{
              margin: "5px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input
              value={comment}
              placeholder="Comment"
              className="comment_input"
              // onChange={(e) => console.log(e.target.value)}
              onChange={(e) => setComment(e.target.value)}
            />
            <IoMdSend
              style={{ cursor: "pointer" }}
              onClick={createCommentHandler}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default AnnouncementCard;
