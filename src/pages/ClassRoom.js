import React from 'react'
import { Box } from "@mui/material";

import Layout from "../layout/Layout";
import ClassCard from "../components/Card/ClassCard";

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
  return (
    <Layout>
    <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
      {data?.map((item, index) => (
        <ClassCard key={index} data={item}/>
      ))}
    </Box>
  </Layout>
  )
}

export default ClassRoom