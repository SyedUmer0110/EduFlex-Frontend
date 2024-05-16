import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

const jwt = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${jwt}`, // Example of setting Authorization header
};

export const getAvailableCourses = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8081/api/courseregistration/courseregistration/page",
      { headers }
    );
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};

export const registerCourses = async (code, sectionName) => {
  try {
    // const decodedPayload = jwtDecode(jwt, { payload: true })
    const payload = {
      ...(sectionName?.length > 0 && {section_Name: sectionName}),
      courseCode: code
    }
    const res = await axios.post(
      "http://localhost:8081/api/courseregistration/courseregistration", [payload] ,
      { headers }
    );
    if (res) {
      console.log(res);
      return res;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};

export const dropCourse = async (code) => {
  try {
    const res = await axios.get(
      `http://localhost:8081/api/courseregistration/courseregistration/drop/${code}`,
      { headers }
    );
    if (res) {
      console.log(res);
      return res;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};
