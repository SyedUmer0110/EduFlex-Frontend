import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiBorderRadius } from "react-icons/bi";
import { MenuItem, Select, TextField } from "@mui/material";
import { addSemester } from "../../api/semester/SemesterService";

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

const CreateSemesterModal = ({ open, setOpen }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createSemesterHandler = async () => {
    const payload = {
      name: title,
      start_date: startDate,
      status: status,
      year: year,
      is_registration_open: false,
    };

    const res = await addSemester(payload);

    if (res) {
      //   await getAllJobs();
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
            <Typography>Name</Typography>
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
            <Typography>Year</Typography>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              onChange={(e) => setYear(e.target.value)}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Status</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label=""
              onChange={(e) => setStatus(e?.target?.value)}
            >
              <MenuItem value={"Passed"}>Passed</MenuItem>
              <MenuItem value={"Current"}>Current</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>Start Date</Typography>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="date_picker_input"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>

          {/* <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}
          >
            <Typography>End Date</Typography>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="date_picker_input"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box> */}

          <Button className="modal_submit_btn" onClick={createSemesterHandler}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateSemesterModal;
