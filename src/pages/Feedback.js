import React, { useEffect, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import Layout from "../layout/Layout";
import { getPosts } from "../api/generalAnnouncement/GeneralAnnouncement";
import LectureFeedbackCard from "../components/Card/LectureFeedbackCard";
import { getAvgRating, getFeedbacks, getLectures } from "../api/lecture/LectureServices";

const data = [
  {
    id: 1,
    company_name: "Tech Solutions Inc.",
    created_at: "2024-05-12T08:00:00Z",
    description:
      "We are looking for a skilled software engineer to join our team.",
    job_type: "Full-time",
    location: "San Francisco, CA",
    title: "Software Engineer",
    admin_id: 1234,
  },
  {
    id: 2,
    company_name: "Data Innovations Ltd.",
    created_at: "2024-05-11T10:00:00Z",
    description:
      "Exciting opportunity for a data analyst to work on cutting-edge projects.",
    job_type: "Contract",
    location: "New York, NY",
    title: "Data Analyst",
    admin_id: 5678,
  },
  {
    id: 3,
    company_name: "Cybersecurity Solutions LLC",
    created_at: "2024-05-10T12:00:00Z",
    description: "Join our team to develop innovative cybersecurity solutions.",
    job_type: "Part-time",
    location: "Washington, D.C.",
    title: "Cybersecurity Specialist",
    admin_id: 9012,
  },
  {
    id: 4,
    company_name: "Cloud Technologies Corp",
    created_at: "2024-05-09T14:00:00Z",
    description:
      "Seeking a cloud architect to design and implement scalable cloud solutions.",
    job_type: "Full-time",
    location: "Seattle, WA",
    title: "Cloud Architect",
    admin_id: 3456,
  },
  {
    id: 5,
    company_name: "AI Innovations Ltd.",
    created_at: "2024-05-08T16:00:00Z",
    description:
      "Exciting opportunity for an AI engineer to work on cutting-edge AI projects.",
    job_type: "Contract",
    location: "Austin, TX",
    title: "AI Engineer",
    admin_id: 7890,
  },
  {
    id: 6,
    company_name: "Mobile App Solutions Inc.",
    created_at: "2024-05-07T18:00:00Z",
    description:
      "We are looking for a mobile app developer to create innovative mobile applications.",
    job_type: "Full-time",
    location: "Los Angeles, CA",
    title: "Mobile App Developer",
    admin_id: 1234,
  },
  {
    id: 7,
    company_name: "Web Development Co.",
    created_at: "2024-05-06T20:00:00Z",
    description:
      "Exciting opportunity for a web developer to join our dynamic team.",
    job_type: "Part-time",
    location: "Chicago, IL",
    title: "Web Developer",
    admin_id: 5678,
  },
  {
    id: 8,
    company_name: "Network Solutions Group",
    created_at: "2024-05-05T22:00:00Z",
    description:
      "Join us as a network engineer to design and maintain our network infrastructure.",
    job_type: "Full-time",
    location: "Dallas, TX",
    title: "Network Engineer",
    admin_id: 9012,
  },
  {
    id: 9,
    company_name: "Software Testing Solutions Inc.",
    created_at: "2024-05-04T00:00:00Z",
    description:
      "We are seeking a software tester to ensure the quality of our products.",
    job_type: "Contract",
    location: "Boston, MA",
    title: "Software Tester",
    admin_id: 3456,
  },
  {
    id: 10,
    company_name: "Database Management Co.",
    created_at: "2024-05-03T02:00:00Z",
    description:
      "Join our team as a database administrator to manage our databases efficiently.",
    job_type: "Full-time",
    location: "San Diego, CA",
    title: "Database Administrator",
    admin_id: 7890,
  },
];

const Feedback = () => {
  const [page, setPage] = useState(1);
  const [feedbacks, setFeedbacks] = useState([]);
  const [rating, setRating] = useState("");

  const pageChangeHandler = (a, page) => {
    setPage(page);
  };
  const getAllFeedbacks = async() => {
      const feedback = await getFeedbacks();
      const avgRating = await getAvgRating();
      
      setFeedbacks([...feedback]);
      setRating(avgRating);
  }

  useEffect(() => {
    getAllFeedbacks();
    const startIndex = (page - 1) * 5
    const endIndex = 5 * page

    let tempData = feedbacks.slice(startIndex, endIndex)
    setFeedbacks(tempData)
  },[page])

  return (
    <Layout>
      <Box
        sx={{
          margin: "1rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        
       <Typography>
        Teacher Performance Rating - {rating}
       </Typography>
        <Box
          sx={{
            width: "95%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {feedbacks?.map((item) => (
            <LectureFeedbackCard data={item} />
          ))}
        </Box>

        <Pagination
          count={Math.ceil(data?.length / 5)}
          defaultPage={1}
          page={page}
          onChange={pageChangeHandler}
          color="secondary"
        />
      </Box>
    </Layout>
  );
};

export default Feedback;
