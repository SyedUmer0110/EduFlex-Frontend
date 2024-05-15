import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Layout from "../layout/Layout";
import ClassCard from "../components/Card/ClassCard";
import {
  getClassroomContent,
  getClassrooms,
  getTeacherClassrooms,
} from "../api/classroom/ClassroomServices";
import PdfUploader from "../components/PdfUploader";

const data = [
  {
    className: "KUDCS-MP-2021-BSCS-DAA",
    owner: "Dr S J Hussain",
    bg: "violet",
  },
  {
    className: "KUDCS-MP-2021-BSCS-DAA",
    owner: "Dr S J Hussain",
    bg: "green",
  },
  {
    className: "KUDCS-MP-2021-BSCS-DAA",
    owner: "Dr S J Hussain",
    bg: "cyan",
  },
];

const ClassRoom = () => {
  const [classrooms, setClassRooms] = useState(null);

  const [content, setContent] = useState([]);

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
    setClassRooms(tempArr);
  };

  const getTeacherClasses = async () => {
    const data = await getTeacherClassrooms();
    let tempArr = [];
    if (data?.length > 0) {
      data?.map((item) => {
        if (item?.classroom) {
          tempArr.push(item?.classroom);
        }

        if (item?.electiveClassroom) {
          tempArr.push(item?.electiveClassroom);
        }
      });
    }
    setClassRooms(tempArr);
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log("role", role);
    if (role == "Role_STUDENT") {
      getClasses();
    } else if(role == "Role_TEACHER"){
      getTeacherClasses();
    }
  }, []);

  return (
    <Layout>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Box>
          {/* {content?.length > 0 && (
            <div className="App">
              <FileViewer base64String={content[0]?.files[0]?.fileData} />
            </div>
          )} */}
        </Box>
        {classrooms &&
          classrooms?.map((item, index) => (
            <ClassCard key={index} data={item} />
          ))}
      </Box>
    </Layout>
  );
};

export default ClassRoom;
