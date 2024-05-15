import React, { useEffect, useState } from "react";
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
import { getMarks } from "../api/marks/MarksService";
import { getClassrooms } from "../api/classroom/ClassroomServices";

const headRows = [
  "Sessional-I #",
  "Weightage",
  "Obtained Marks",
  "Total Marks",
  "Average",
  "Minimum",
  "Maximum",
];

const assignmentRows = ["Assignment #", "Obtained Marks", "Total Marks"];

const mid1Rows = ["Sessional-1 #", "Obtained Marks", "Total Marks"];

const mid2Rows = ["Sessional-2 #", "Obtained Marks", "Total Marks"];

const projectRows = ["Project #", "Obtained Marks", "Total Marks"];

const finalRows = ["#", "Obtained Marks", "Total Marks"];

const rows = [
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
  [1, 3.5, 7, 10, 4.71, 0, 10],
  [1, 3.5, 3.25, 10, 5.84, 2.5, 9],
];

const coursesArray = ["Course-1", "Course-2", "Course-3", "Course-4"];

const courseDetail = [
  "Assignments",
  "Sessional-1",
  "Sessional-2",
  "Total Marks",
];

const Marks = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [classes, setClasses] = useState([]);
  const [courses, setCourses] = useState([]);

  const [marks, setMarks] = useState(null);
  const [assignmentData, setAssignmentData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [session1Data, setSession1Data] = useState([]);
  const [session2Data, setSession2Data] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const getMarksHandler = async (course) => {
    const data = await getMarks(course?.course_id);
    console.log("marks data", data);
    if (data) {
      setMarks(data[0]);
    }
  };

  const getClasses = async () => {
    const data = await getClassrooms();
    console.log("data", data);
    let tempArr = [];
    if (data?.classrooms?.length > 0) {
      tempArr = [...tempArr ,...data?.classrooms];
    }

    if (data?.electiveClassrooms?.length > 0) {
      tempArr = [...tempArr ,...data?.electiveClassrooms];
    }
    setClasses(tempArr);
  };

  useEffect(() => {
    getMarksHandler();
    getClasses();
  }, []);

  useEffect(() => {
    if (classes.length > 0) {
      let tempCourses = [];
      classes?.map((item) => {
        tempCourses.push(item?.course);
      });

      setCourses(tempCourses);
    }
  }, [classes]);

  useEffect(() => {
    if (selectedCourse !== null) {
      getMarksHandler(selectedCourse);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (marks) {
      // for project data
      let tempArrProjetcs = [1, marks?.project, marks?.totProject || 0];
      setProjectData([tempArrProjetcs]);

      // mid-1
      let tempArrMid1 = [1, marks?.mid1, marks?.totmid1 || 0];
      setSession1Data([tempArrMid1]);

      // mid-2
      let tempArrMid2 = [1, marks?.mid2, marks?.totmid2 || 0];
      setSession2Data([tempArrMid2]);
      
      // final
      let tempArrFinal = [1, marks?.finalExam, marks?.totFinal || 0];
      setFinalData([tempArrFinal]);
      // setAssignmentData
    }
  }, [marks]);

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
                {item?.course_code}
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
            background: "#EAEDED",
            borderRadius: "5px",
            padding: "10px 15px",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            {selectedCourse?.course_code}
          </Typography>

          {/* {marks &&
            courseDetail?.map((item, index) => (
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
            ))} */}

          <Accordion
            expanded={expanded === "assignment"}
            onChange={handleChange("assignment")}
          >
            <AccordionSummary
              expandIcon={<MdOutlineExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Assignment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTable headRows={assignmentRows} rows={rows} />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "mid1"}
            onChange={handleChange("mid1")}
          >
            <AccordionSummary
              expandIcon={<MdOutlineExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Sessional-1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTable headRows={mid1Rows} rows={session1Data} />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "mid2"}
            onChange={handleChange("mid2")}
          >
            <AccordionSummary
              expandIcon={<MdOutlineExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Sessional-2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTable headRows={mid2Rows} rows={session2Data} />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "project"}
            onChange={handleChange("project")}
          >
            <AccordionSummary
              expandIcon={<MdOutlineExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Project
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTable headRows={projectRows} rows={projectData} />
            </AccordionDetails>
          </Accordion>
          
          <Accordion
            expanded={expanded === "final"}
            onChange={handleChange("final")}
          >
            <AccordionSummary
              expandIcon={<MdOutlineExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Final
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomTable headRows={finalRows} rows={finalData} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  );
};

export default Marks;
