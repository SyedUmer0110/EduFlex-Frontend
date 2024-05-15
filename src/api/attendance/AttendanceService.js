// /getattendance/{courseCode}/{semesterId}

import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

export const getStudentAttendance = async(courseCode, semesterId) => {
  
    try {
        console.log(courseCode);
        console.log(semesterId);
      
      attachToken()
      const res = await privateAPI.get(`/api/student/getattendance/${courseCode}/${semesterId}`);
      console.log(res?.data);

      if (res?.status === 200 || res?.status === 201) {
          console.log(res?.data);
          return res?.data;
          toast.success("Feedback added successfully");
          // return res?.data
      }else{
        toast.error(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error while adding feedback");
    }
}

export const getTeacherCurrentCourses = async() => {
  
    try {
      
      attachToken()
      const res = await privateAPI.get(`/api/teacher/currentcourse`);

      if (res?.status === 200 || res?.status === 201) {
          console.log(res?.data);
          return res?.data;
      }else{
        toast.error(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error while adding feedback");
    }
}

export const loadAttendance = async(payload) => {
    // localhost:8080/api/teacher/loadattendance/basit.ali33/spring2024/CS118/23SEA
    try {
      
      attachToken()
      const res = await privateAPI.get(`/api/teacher/loadattendance/${payload?.teacher_id}/${payload?.semester_id}/${payload?.course_code}/${payload?.section_id}`);
      
      if (res?.status === 200 || res?.status === 201) {
          console.log(res?.data);
          return res?.data;
      }else{
        toast.error(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error while adding feedback");
    }
}