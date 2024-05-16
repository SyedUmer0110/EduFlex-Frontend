import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getAvailableCourses } from "../api/courseRegistration/CourseRegistrationService";
import SelectSectionModal from "../components/Modal/SelectSectionModal";
import {
  endRegistration,
  endSemester,
  getSemesters,
  startRegistration,
} from "../api/semester/SemesterService";
import { Box, Button, Typography } from "@mui/material";
import CreateSemesterModal from "../components/Modal/CreateSemesterModal";
import moment from "moment";
import StudentCourseRegistration from "./StudentCourseRegistration";

const CourseRegistration = () => {
  const [open, setOpen] = useState(false);
  const [activeSemester, setActiveSemester] = useState(null);

  const getSemestersHandler = async () => {
    const data = await getSemesters();
    if (data) {
      let tempArr = [];
      data?.map((item) => {
        if (item?.status?.toLowerCase() === "current") {
          tempArr.push(item);
        }
      });

      setActiveSemester(...tempArr);
    }
  };

  const startRegistrationHandler = async () => {
    const res = await startRegistration(activeSemester?.semester_id);
    if (res) {
      getSemestersHandler();
    }
  };

  const endRegistrationHandler = async () => {
    const res = await endRegistration(activeSemester?.semester_id);
    if (res) {
      getSemestersHandler();
    }
  };

  const endSemesterHandler = async () => {
    const res = await endSemester({
      id: activeSemester?.semester_id,
      date: moment().format("YYYY-MM-DD"),
    });
    if (res) {
      getSemestersHandler();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("role") == "Role_ADMIN") {
      getSemestersHandler();
    }
  }, []);

  return (
    <Layout>
      {localStorage.getItem("role") == "Role_STUDENT" ? (
        <StudentCourseRegistration />
      ) : localStorage.getItem("role") == "Role_ADMIN" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            rowGap: "2rem",
          }}
        >
          <CreateSemesterModal open={open} setOpen={setOpen} />
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <Button
              className="modal_submit_btn"
              onClick={() => setOpen(true)}
              disabled={activeSemester ? true : false}
            >
              Create Semester
            </Button>
            <Button
              className="modal_submit_btn"
              onClick={() => endSemesterHandler()}
              disabled={activeSemester ? false : true}
            >
              End Semester
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {activeSemester?.name}
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {activeSemester?.year}
              </Typography>
              <Typography sx={{ paddingLeft: "1rem" }}>
                {activeSemester &&
                  (activeSemester?.registrationOpen
                    ? "(Registration Open)"
                    : "(Registration Close)")}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Button
                className="start_btn"
                disabled={
                  activeSemester?.registrationOpen == true ? true : false
                }
                onClick={startRegistrationHandler}
              >
                Start
              </Button>
              <Button
                className="close_btn"
                disabled={
                  activeSemester?.registrationOpen == true ? false : true
                }
                onClick={endRegistrationHandler}
              >
                Close
              </Button>
            </Box>
            {/* <div onClick={() => setOpen(true)}>click</div> */}
            {/* <SelectSectionModal open={open} setOpen={setOpen} /> */}
          </Box>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Layout>
  );
};

export default CourseRegistration;
