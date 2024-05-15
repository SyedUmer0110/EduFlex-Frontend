import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getAvailableCourses } from "../api/courseRegistration/CourseRegistrationService";
import SelectSectionModal from "../components/Modal/SelectSectionModal";

const CourseRegistration = () => {
    const [open, setOpen] = useState(false)

  const getCourses = async () => {
    const data = await getAvailableCourses();
    console.log("data", data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Layout>
      <div>
        <div onClick={() => setOpen(true)}>click</div>
        <SelectSectionModal open={open} setOpen={setOpen} />
      </div>
    </Layout>
  );
};

export default CourseRegistration;
