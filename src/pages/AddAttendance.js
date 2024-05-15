import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import Layout from "../layout/Layout";
import CustomTable from "../components/Table/CustomTable";
import { getClassrooms } from "../api/classroom/ClassroomServices";
import { getStudentAttendance,getTeacherCurrentCourses  } from "../api/attendance/AttendanceService";

const AddAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]); 

  const [attendances, setAttendances] = useState([]);

  const getCourses = async () => {
    const data = await getTeacherCurrentCourses();
   
    console.log(data);
    let tempArr = [];
    data.map((item)=>{
        if (item?.classroom) {
            
            tempArr.push({course : item?.classroom?.course,
                 semester: item?.classroom?.semester,
                section: item?.classroom?.section,
            teacher : item?.teacher})
        }
    
        if (item?.electiveClassroom) {
            
            tempArr.push({course : item?.electiveClassroom?.course,
                semester: item?.electiveClassroom?.semester,
               section: item?.electiveClassroom?.section,
           teacher : item?.teacher})
        }

  });
  console.log(tempArr);
  setCourses(tempArr);

    
  };
  const headRows = [
    "Lecture No",
    "Date",
    "Presence",
  ]

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

    const loadAttendance = async() => {
        const payload = {
            teacher_id : selectedCourse?.teacher?.username,
            course_code : selectedCourse?.course?.course_code,
            semester_id: selectedCourse?.semester?.semester_id,
            section_id: selectedCourse?.section?.id
        }
        const data = await loadAttendance(payload);
        console.log(data);
    }
  useEffect(()=>{
    

    if(selectedCourse != null){
      // loadAttendance();
      console.log("selected")
    }
  },[selectedCourse])
//   useEffect(() => {
//     if (classes.length > 0) {
//       let tempCourses = [];
//       classes?.map((item) => {
        
//         tempCourses.push({course: item?.course, semester: item?.semester});
//       });
//       setCourses(tempCourses);
//     }
   
     
//   }, [classes]);

  return (
    <Layout>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
      <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginRight:'-30px'
            }}
          >
            {courses?.map((item, index) => (
              <Box
                key={index}
                sx={{
                //   background: selectedCourse?.course?.course_code === item?.course?.course_code ? "var(--primary)" : "",
                //   color: selectedCourse?.course?.course_code === item?.course?.course_code  ? "#ffffff" : "#000000",
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
