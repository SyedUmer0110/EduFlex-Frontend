import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { privateAPI } from "../config/Constants";

import { IoInformationCircleOutline } from "react-icons/io5";

import Layout from "../layout/Layout";
import { getStudent } from "../api/student/StudentServices";

const Dashboard = () => {
  const [student, setStudent] = useState(null);

  const getStudentDetails = async (payload) => {
    try {
      const res = await getStudent();
      setStudent(res);
    } catch (err) {
      console.log(err);
      // toast.error("There was an error");
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  useEffect(() => {
    console.log("student", student);
  }, [student]);

  return (
    <Layout>
      {student ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {/* Info Box */}
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                background: "var(--primary)",
                display: "flex",
                alignItems: "center",
                columnGap: "1rem",
                padding: "20px 25px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <IoInformationCircleOutline
                style={{ color: "white", width: "25px", height: "25px" }}
              />
              <Typography sx={{ color: "#ffffff", fontSize: "18px" }}>
                University Information
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "30px 25px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderBottom: "1px solid var(--primary)",
                borderLeft: "1px solid var(--primary)",
                borderRight: "1px solid var(--primary)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Roll No:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>20k-1068</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Degree:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>BS(SE)</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Batch:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>{student?.batch}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Section:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>{student?.section}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Campus:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>{student?.city}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                      Status:
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>{student?.status}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* Info Box */}
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
          <CircularProgress color="secondary"/>
        </Box>
      )}
    </Layout>
  );
};

export default Dashboard;
