import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

import Layout from "../layout/Layout";
import BookImage from "../assets/book_illustration.png";
import AnnouncementCard from "../components/Card/AnnouncementCard";
import {
  getClassroomAnnouncements,
  getClassroomContent,
  getClassroomStudents,
} from "../api/classroom/ClassroomServices";
import FileViewer from "../components/FileViewer";
import { IoMdSend } from "react-icons/io";
import LectureFeedbackCard from "../components/Card/LectureFeedbackCard";
import { getFeedbacks, getLectures } from "../api/lecture/LectureServices";
import FeedbackCard from "../components/Card/FeedbackCard";

const dummyAnnouncements = [
  {
    id: 1,
    content: "Teacher Uploaded a new material: Lecture Slides 7",
  },
  {
    id: 2,
    content: "Teacher Uploaded a new material: Lecture Slides 7",
  },
  {
    id: 3,
    content: "Teacher Uploaded a new material: Lecture Slides 7",
  },
];

const ClassRoomDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  console.log("state", state);
  const [value, setValue] = useState("0");
  const [showPdf, setShowPdf] = useState({ name: "", show: false });

  const [announcements, setAnnouncements] = useState(null);
  const [studentList, setStudentList] = useState(null);
  const [content, setContent] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [role, setRole] =  useState("");

  


  const getStudents = async () => {
    const data = await getClassroomStudents(id);
    setStudentList([...data]);
  };

  const getContent = async () => {
    const data = await getClassroomContent(id);
    console.log("data", data);
    setContent(data);
  };

  const getAnnouncements = async () => {
    // const data = await getClassroomAnnouncements(id);
    // console.log("data", data);
    setAnnouncements(dummyAnnouncements);
  };

  const getAllLectures = async () => {
    const data = await getLectures(id);
    setLectures([...data]);
  }

  const getAllFeedbacks = async () => {
    console.log("feedback");
    const data = await getFeedbacks(id);
    setFeedbacks([...data]);
    console.log("feedback");
    console.log(feedbacks);
  }
  useEffect(()=>{
    const myrole = localStorage.getItem('role');
    setRole(myrole);
  },[])

  useEffect(() => {
    const myrole = localStorage.getItem('role');
    setRole(myrole);
    if (value == 0) {
      getAnnouncements();
    } else if (value == 1) {
      getContent();
    } else if (value == 2) {
      getStudents();
    }else if(value == 3){
      getAllLectures();
    }else if(value == 4 && role === "Role_TEACHER"){
      getAllFeedbacks();
    }

  }, [value, id]);

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

  const [open, setOpen] = React.useState(false);

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
          <Tab value="3" label="Lectures"/>
         {role == "Role_TEACHER" &&(
          <Tab value="4" label = "Feedbacks"/>
         )}

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
                  {state?.data?.course?.course_name}
                </Typography>
              </Box>
              <img src={BookImage} style={{ width: "400px", height: "auto" }} />
            </Box>

            <Box
              sx={{
                margin: "2rem 0",
                border: "1px solid #dadce0",
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  margin: "5px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input placeholder="Comment" className="comment_input" />
                <IoMdSend />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {announcements?.map((item) => (
                <AnnouncementCard data={item} />
              ))}
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ width: "80%", margin: "0 auto" }}>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "2rem",
              }}
            >
              {content?.map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "0.6rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      borderBottom: "1px solid black",
                      paddingBottom: "1rem",
                      fontWeight:"600px"
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "0.5rem",
                    }}
                  >
                    {item?.files?.map((file) => (
                      <>
                        <Typography
                        sx={{fontWeight: "600px"}}
                          onClick={() =>
                            setShowPdf({ name: file.name, show: true })
                          }
                        >
                          {file?.name}
                        </Typography>

                        <div
                        // className={
                        //   showPdf.name == file.name && showPdf.show === true
                        //     ? "active_pdf_view"
                        //     : "pdf_view"
                        // }
                        >
                          <div className="App">
                            <FileViewer base64String={file?.fileData} />
                          </div>
                        </div>

                        {/* {showPdf.name == file.name && showPdf.show === true && (
                          <div
                          // className={
                          //   showPdf.name == file.name && showPdf.show === true
                          //     ? "active_pdf_view"
                          //     : "pdf_view"
                          // }
                          >
                            <div className="App">
                              <FileViewer base64String={file?.fileData} />
                            </div>
                          </div>
                        )} */}

                        {/* <PreviewModal open={open} setOpen={setOpen} name={file.name} /> */}
                      </>
                    ))}
                  </Box>
                </Box>
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
                  {studentList?.length || 0} students
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                {studentList &&
                  studentList?.map((item) => (
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
                      <Typography sx={{ textTransform: "capitalize" }}>
                        {item?.personal_info?.full_name}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
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
                  {state?.data?.course?.course_name} - Lectures 
                </Typography>
              </Box>
              <img src={BookImage} style={{ width: "400px", height: "auto" }} />
            </Box>

            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {lectures?.map((item) => (
                <LectureFeedbackCard data={item} />
              ))}
            </Box>
          </Box>
        </TabPanel>

       {role === "Role_TEACHER" &&(
          <TabPanel value={value} index={4}>
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
                  {state?.data?.course?.course_name} - Feedbacks 
                </Typography>
              </Box>
              <img src={BookImage} style={{ width: "400px", height: "auto" }} />
            </Box>

            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {feedbacks?.map((item) => (
                <FeedbackCard data={item} />
              ))}
            </Box>
          </Box>
        </TabPanel>
       )}
       

        
      </Box>
    </Layout>
  );
};

export default ClassRoomDetails;
