import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import { MdOutlineExpandMore } from "react-icons/md";

import Layout from "../layout/Layout";
import CustomTable from "../components/Table/CustomTable";

const headRows = [
  "Sessional-I #",
  "Weightage",
  "Obtained Marks",
  "Total Marks",
  "Average",
  "Minimum",
  "Maximum",
];

const rows = [
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
  [1, 3.5, 7, 10, 4.71, 0, 10],
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
];

const courses = ["Course-1", "Course-2", "Course-3", "Course-4"];

const courseDetail = [
  "Assignments",
  "Sessional-1",
  "Sessional-2",
  "Total Marks",
];

const Marks = () => {
  const [selectedCourse, setSelectedCourse] = useState("Course-1");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Courses
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {courses?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: selectedCourse === item ? "var(--primary)" : "",
                  color: selectedCourse === item ? "#ffffff" : "#000000",
                  borderRadius: "5px",
                  padding: "10px 15px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedCourse(item);
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "1rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
            background: '#EAEDED',
            borderRadius: '5px',
            padding: '10px 15px'
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            {selectedCourse}
          </Typography>

          {/* Accordian */}

          {courseDetail?.map((item, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {item}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTable headRows={headRows} rows={rows} />
              </AccordionDetails>
            </Accordion>
          ))}

          {/* Accordian */}
        </Box>
      </Box>
    </Layout>
  );
};

export default Marks;
