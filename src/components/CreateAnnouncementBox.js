import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { createClassroomAnnouncement } from "../api/classroom/ClassroomServices";

const CreateAnnouncementBox = ({ id, getAnnouncements }) => {
  const [announcementString, setAnnouncementString] = useState("");

  const createAnnouncementHandler = async () => {
    const payload = {
      id: id,
      content: announcementString,
    };
    const res = await createClassroomAnnouncement(payload);

    console.log("res", res);

    if (res) {
      setAnnouncementString("");
      getAnnouncements();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "5px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        value={announcementString}
        placeholder="Comment"
        className="comment_input"
        onChange={(e) => setAnnouncementString(e.target.value)}
      />
      <IoMdSend
        onClick={createAnnouncementHandler}
        style={{ cursor: "pointer" }}
      />
    </Box>
  );
};

export default CreateAnnouncementBox;
