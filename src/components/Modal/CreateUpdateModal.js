import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiBorderRadius } from "react-icons/bi";
import { TextField } from "@mui/material";
import { createSocietyUpdates } from "../../api/Society/SocietyServices";

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

const CreateUpdateModal = ({open, setOpen, getAllUpdates}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [image, setImage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createUpdatesHandler = async () => {
    const payload = {
      title: title,
      content: content,
      type: type,
      societyName: societyName,
      image: image,
      video: ""
    };

    const res = await createSocietyUpdates(payload);

    if (res) {
      await getAllUpdates();
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
              onChange={(e) => setContent(e.target.value)}
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
              onChange={(e) => setType(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Society Name</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setSocietyName(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Image</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setImage(e.target.value)}
            />
          </Box>

          <Button
            className="modal_submit_btn"
            onClick={createUpdatesHandler}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateUpdateModal;
