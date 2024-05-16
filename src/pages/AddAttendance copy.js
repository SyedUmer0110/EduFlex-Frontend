import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../layout/Layout";
import { getClassrooms } from "../api/classroom/ClassroomServices";
import {
  getStudentAttendance,
  getTeacherCurrentCourses,
  loadAttendance,
} from "../api/attendance/AttendanceService";
import CustomTableAlt from "../components/Table/CustomTableAlt";
import CustomTableAddAttendance from "../components/Table/CustomTableAddAttendance";

const AddAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);

  const [headRows, setHeadRows] = useState([]);

  const getCourses = async () => {
    const data = await getTeacherCurrentCourses();

    console.log("data", data);

    if (data) {
      let tempArr = [];
      data?.map((item) => {
        if (item?.classroom) {
          tempArr.push({
            course: item?.classroom?.course,
            semester: item?.classroom?.semester,
            section: item?.classroom?.section,
            teacher: item?.teacher,
          });
        }

        if (item?.electiveClassroom) {
          tempArr.push({
            course: item?.electiveClassroom?.course,
            semester: item?.electiveClassroom?.semester,
            section: item?.electiveClassroom?.section,
            teacher: item?.teacher,
          });
        }
      });

      setCourses(tempArr);
    }
  };
  // const headRows = ["Name", "day1", "day2", "day3"];

  const rows = [
    [1, "23-Jan-2024", 1, "P"],
    [2, "24-Jan-2024", 1, "P"],
    [3, "25-Jan-2024", 1, "P"],
    [4, "30-Jan-2024", 1, "P"],
    [5, "31-Jan-2024", 1, "P"],
  ];
  useEffect(() => {
    getCourses();
  }, []);

  const loadAttendanceHandler = async () => {
    const payload = {
      teacher_id: selectedCourse?.teacher?.username,
      course_code: selectedCourse?.course?.course_code,
      semester_id: selectedCourse?.semester?.semester_id,
      section_id: selectedCourse?.section?.id,
    };
    const data = await loadAttendance(payload);
    console.log("load", data);
    setAttendanceList(data);
  };

  useEffect(() => {
    if (selectedCourse != null) {
      loadAttendanceHandler();
      // console.log("selected");
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (attendanceList?.length > 0) {
      let tempArr = ['Name'];
      attendanceList[0]?.attendanceList?.map((item) => {
        tempArr.push(item?.date)
      });

      setHeadRows(tempArr)
    }
  }, [attendanceList]);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
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

      {attendanceList?.length > 0 && (
        <CustomTableAddAttendance
          headRows={headRows}
          attendanceList={attendanceList}
        />
      )}
      {/* {attendances.length > 0 ? (
          <CustomTable headRows={headRows} attendances={attendances}/>
      ) : (
        <Typography
        sx={{fontWeight:"600px"}}
        marginTop="20px"
        alignItems="center"

        >
          No Attendance uploaded yet</Typography>
      )} */}
    </Layout>
  );
};

export default AddAttendance;
