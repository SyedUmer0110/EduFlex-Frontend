import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../layout/Layout";
import { getClassrooms } from "../api/classroom/ClassroomServices";
import { getStudentAttendance } from "../api/attendance/AttendanceService";
import CustomTableAlt from "../components/Table/CustomTableAlt";
import AddAttendance from "./AddAttendance";

const Attendance = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [courses, setCourses] = useState([]);

  const [classes, setClasses] = useState([]);

  const [attendances, setAttendances] = useState([]);

  const getClasses = async () => {
    const data = await getClassrooms();
    console.log("data", data);
    let tempArr = [];
    if (data?.classrooms?.length > 0) {
      tempArr = [...tempArr, ...data?.classrooms];
    }

    if (data?.electiveClassrooms?.length > 0) {
      tempArr = [...tempArr, ...data?.electiveClassrooms];
    }
    setClasses(tempArr);
  };
  const headRows = ["Lecture No", "Date", "Presence"];

  const rows = [
    [1, "23-Jan-2024", 1, "P"],
    [2, "24-Jan-2024", 1, "P"],
    [3, "25-Jan-2024", 1, "P"],
    [4, "30-Jan-2024", 1, "P"],
    [5, "31-Jan-2024", 1, "P"],
  ];
  useEffect(() => {
    getClasses();
  }, []);
  const getAttendance = async () => {
    console.log(selectedCourse);
    const data = await getStudentAttendance(
      selectedCourse?.course?.course_code,
      selectedCourse?.semester?.semester_id
    );
    console.log(data);
    setAttendances(data);
  };
  useEffect(() => {
    if (selectedCourse != null) {
      getAttendance();
    }
  }, [selectedCourse]);
  useEffect(() => {
    if (classes.length > 0) {
      let tempCourses = [];
      classes?.map((item) => {
        tempCourses.push({ course: item?.course, semester: item?.semester });
      });
      setCourses(tempCourses);
    }
  }, [classes]);

  return (
    <Layout>
      {localStorage.getItem("role") == "Role_TEACHER" ? (
        <AddAttendance />
      ) : (
        <>
          {" "}
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginRight: "-30px",
              }}
            >
              {courses?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    background:
                      selectedCourse?.course?.course_code ===
                      item?.course?.course_code
                        ? "var(--primary)"
                        : "",
                    color:
                      selectedCourse?.course?.course_code ===
                      item?.course?.course_code
                        ? "#ffffff"
                        : "#000000",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedCourse(item);
                  }}
                >
                  {item?.course?.course_code}
                </Box>
              ))}
            </Box>
          </Box>
          {attendances.length > 0 ? (
            <CustomTableAlt headRows={headRows} attendances={attendances} />
          ) : (
            <Typography
              sx={{ fontWeight: "600px" }}
              marginTop="20px"
              alignItems="center"
            >
              No Attendance uploaded yet
            </Typography>
          )}
        </>
      )}
    </Layout>
  );
};

export default Attendance;
