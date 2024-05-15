import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiBorderRadius } from "react-icons/bi";
import { MenuItem, Select, TextField } from "@mui/material";
import { createSocietyUpdates } from "../../api/Society/SocietyServices";
import { createJob } from "../../api/jobs/JobServices";

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

const CreateJobModal = ({ open, setOpen, getAllJobs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createJobHandler = async () => {
    const payload = {
      title: title,
      description: description,
      job_type: type,
      location: location,
      companyName: companyName,
    };

    const res = await createJob(payload);

    if (res) {
      await getAllJobs();
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
            <Typography>Type</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label=""
              onChange={(e) => setType(e?.target?.value)}
            >
              <MenuItem value={'Remote'}>Remote</MenuItem>
              <MenuItem value={'Parttime'}>Parttime</MenuItem>
              <MenuItem value={'Fulltime'}>Fulltime</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Location</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Company</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Box>

          <Button className="modal_submit_btn" onClick={createJobHandler}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateJobModal;
