import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiBorderRadius } from "react-icons/bi";
import { MenuItem, Select, TextField } from "@mui/material";
import { createPost } from "../../api/generalAnnouncement/GeneralAnnouncement";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  BiBorderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const CreatePostModal = ({ open, setOpen, getAllPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createPostHandler = async () => {
    const payload = {
      title: title,
      content: description,
      type: type,
      image: "",
      video: "",
    };

    const res = await createPost(payload);

    if (res) {
      await getAllPosts();
      setOpen(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Society Updates
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Title</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Content</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Type</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setType(e?.target?.value)}
            />
          </Box>

          <Button className="modal_submit_btn" onClick={createPostHandler}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
