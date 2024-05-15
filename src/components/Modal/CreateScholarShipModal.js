import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiBorderRadius } from "react-icons/bi";
import { TextField } from "@mui/material";
import {
  createScholarships,
} from "../../api/scholarship/ScholarshipServices";

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

const CreateScholarShipModal = ({ open, setOpen, getAllScholarships }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [date, setDate] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createScholarshipHandler = async () => {
    const payload = {
      title: title,
      description: description,
      provider: provider,
      eligibilityCriteria: eligibility,
      deadline: date,
    };

    const res = await createScholarships(payload);

    if (res) {
      await getAllScholarships();
      setOpen(false)
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
          Create Scholarship
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
            <Typography>Description</Typography>
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
            <Typography>Provider</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setProvider(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Eligibility Criteria</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setEligibility(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Deadline</Typography>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="date_picker_input"
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>

          <Button
            className="modal_submit_btn"
            onClick={createScholarshipHandler}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateScholarShipModal;
