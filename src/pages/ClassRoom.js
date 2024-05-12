import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Layout from "../layout/Layout";
import ClassCard from "../components/Card/ClassCard";
import { getClassrooms } from "../api/classroom/ClassroomServices";

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

  const getClasses = async () => {
    const data = await getClassrooms();
    setClassRooms([...data?.classrooms, ...data?.electiveClassrooms]);
  };

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <Layout>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {classrooms &&
          classrooms?.map((item, index) => (
            <ClassCard key={index} data={item} />
          ))}
      </Box>
    </Layout>
  );
};

export default ClassRoom;
