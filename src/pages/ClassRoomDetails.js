import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import Layout from "../layout/Layout";
import BookImage from "../assets/book_illustration.png";
import AnnouncementCard from "../components/Card/AnnouncementCard";
import { getClassroomStudents } from "../api/classroom/ClassroomServices";

const ClassRoomDetails = () => {
  const [value, setValue] = useState("0");

  const [studentList, setStudentList] = useState(null);

  const getStudents = async () => {
    const data = await getClassroomStudents();
    setStudentList([...data]);
  };

  useEffect(() => {
    if(value == 2){
      getStudents();
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    console.log("handle change", newValue);
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value != index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
        style={{ width: "100%" }}
      >
        {value == index && (
          <Box sx={{ width: "100%", marginTop: "1rem" }}>{children}</Box>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "1.5rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          sx={{ width: "100%" }}
        >
          <Tab value="0" label="Stream" />
          <Tab value="1" label="Classwork" />
          <Tab value="2" label="People" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Box sx={{ width: "80%", margin: "0 auto" }}>
            <Box
              sx={{
                padding: "10px 15px",
                background: "#1e8e3e",
                borderRadius: "10px",
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "white",
                    paddingBottom: "1rem",
                  }}
                >
                  KUDCS-MP-2021-BSCS-DAA
                </Typography>
              </Box>
              <img src={BookImage} style={{ width: "400px", height: "auto" }} />
            </Box>

            <Box>
              
            </Box>

            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {[1, 1, 1, 1, 1]?.map(() => (
                <AnnouncementCard />
              ))}
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              rowGap: "3rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  borderBottom: "1px solid #1e8e3e",
                  color: "#1e8e3e",
                  fontSize: "32px",
                  fontWeight: 500,
                  paddingBottom: "10px",
                }}
              >
                Teachers
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "1rem",
                  marginTop: "1rem",
                  padding: "0 1rem 1rem 1rem",
                }}
              >
                <Box
                  sx={{
                    background: "#1e8e3e",
                    width: "max-content",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  T
                </Box>
                <Typography>Jhon Doe</Typography>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  borderBottom: "1px solid #1e8e3e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  marginBottom: "2rem",
                }}
              >
                <Typography
                  sx={{
                    color: "#1e8e3e",
                    fontSize: "32px",
                    fontWeight: 500,
                  }}
                >
                  Classmates
                </Typography>
                <Typography
                  sx={{
                    color: "#1e8e3e",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {studentList?.length} students
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                {studentList && studentList?.map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "1rem",
                      borderBottom: "1px solid #5f6368",
                      padding: "0 1rem 1rem 1rem",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#1e8e3e",
                        width: "max-content",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      T
                    </Box>
                    <Typography sx={{textTransform: 'capitalize'}}>{item?.personal_info?.full_name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </Layout>
  );
};

export default ClassRoomDetails;
