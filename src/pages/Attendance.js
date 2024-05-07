import React from "react";
import { Box } from "@mui/material";

import Layout from "../layout/Layout";
import CustomTable from "../components/Table/CustomTable";

const Attendance = () => {
  const headRows = [
    "Lecture No",
    "Date",
    "Duration (In Hours)",
    "Presence",
  ]

  const rows = [
    [1, "23-Jan-2024", 1, "P"],
    [2, "24-Jan-2024", 1, "P"],
    [3, "25-Jan-2024", 1, "P"],
    [4, "30-Jan-2024", 1, "P"],
    [5, "31-Jan-2024", 1, "P"],
  ];

  return (
    <Layout>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <CustomTable headRows={headRows} rows={rows}/>
      </Box>
    </Layout>
  );
};

export default Attendance;
