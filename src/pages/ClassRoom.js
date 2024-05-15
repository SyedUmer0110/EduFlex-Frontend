import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Layout from "../layout/Layout";
import ClassCard from "../components/Card/ClassCard";
import {
  getClassroomContent,
  getClassrooms,
} from "../api/classroom/ClassroomServices";

import FileViewer from "../components/FileViewer";

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
    setClassRooms([...data?.classrooms, ...data?.electiveClassrooms]);
  };

  useEffect(() => {
    getClasses();
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
