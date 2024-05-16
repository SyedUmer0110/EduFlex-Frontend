import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  dropCourse,
  getAvailableCourses,
  registerCourses,
} from "../api/courseRegistration/CourseRegistrationService";

const StudentCourseRegistration = () => {
  const [offeredCourses, setOfferedCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  const getAvailableCoursesHandler = async () => {
    const data = await getAvailableCourses();
    console.log("data", data);
    if (data) {
      setOfferedCourses(data?.offeredCourses);
      setEnrolledCourses(data?.enrollments);
    }
  };

  const registerHandler = async (code) => {
    const res = await registerCourses(code, selectedSection);

    if (res) {
      console.log(res);
      getAvailableCoursesHandler();
    }
  };

  const dropCourseHandler = async (code) => {
    const res = await dropCourse(code);

    if (res) {
      console.log(res);
      getAvailableCoursesHandler();
    }
  };

  useEffect(() => {
    getAvailableCoursesHandler();
  }, []);

  const headRows = ["Name", "Code", "Credit Hours", "Domain", "Sections", ""];
  const enrHeadRows = ["Name", "Code", "Credit Hours", "Domain", "Sections"];

  return (
    <Box>
      <Typography
        sx={{ fontSize: "22px", fontWeight: 500, marginBottom: "1rem" }}
      >
        Available Courses
      </Typography>
      <TableContainer className="custom_table" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headRows?.map((item, index) => (
                <TableCell align={index === 0 ? "left" : "center"}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {offeredCourses?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="left">
                  {row?.course?.course_name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row?.course?.course_code}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row?.course?.credit_hours}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row?.course?.domain}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row?.availableSections?.length > 0 && (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label=""
                      onChange={(e) => setSelectedSection(e?.target?.value)}
                    >
                      {row?.availableSections?.map((item) => (
                        <MenuItem value={item?.name}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  <Button
                    className="modal_submit_btn"
                    onClick={() => registerHandler(row?.course?.course_code)}
                  >
                    Register
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ marginTop: "3rem" }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 500, marginBottom: "1rem" }}
        >
          Enrolled Courses
        </Typography>
        <TableContainer className="custom_table" component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {enrHeadRows?.map((item, index) => (
                  <TableCell align={index === 0 ? "left" : "center"}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {enrolledCourses?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="left">
                    {row?.course?.course_name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row?.course?.course_code}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row?.course?.credit_hours}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row?.course?.domain}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <Button
                      className="close_btn"
                      onClick={() =>
                        dropCourseHandler(row?.course?.course_code)
                      }
                    >
                      Drop
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StudentCourseRegistration;
