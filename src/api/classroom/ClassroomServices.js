import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import { privateAPI, attachToken } from "../../config/Constants";

export const getClassrooms = async () => {
  try {
    attachToken();
    const res = await privateAPI.get("/api/student/studentclassrooms");
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};

export const getClassroomAnnouncements = async (id) => {
  try {
    attachToken();
    // change api to annoucnement api
    const res = await privateAPI.get(`/api/announcement/${id}`);
    console.log("classroom students list res", res);
    if (res) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};

export const createClassroomAnnouncement = async (payload) => {
  try {
    attachToken();
    // change api to annoucnement api
    const res = await privateAPI.post(
      `/api/announcement/create/${payload?.id}`,
      { content: payload?.content }
    );
    console.log("classroom students list res", res);
    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error");
  }
};

export const addAnnouncementComment = async (payload) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/api/comment/${payload?.id}`, {
      msg: payload?.comment,
    });
    console.log("comment added", res);
    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error");
  }
};

export const getAnnouncementComments = async (id) => {
  try {
    attachToken();
    // change api to annoucnement api
    const res = await privateAPI.get(`/api/comment/${id}`);
    console.log("comments fetched", res);
    if (res) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};

export const getClassroomStudents = async (id) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/api/classroom/getstudents/${id}`);
    console.log("classroom students list res", res);
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};

export const getClassroomContent = async (id) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/api/content/contents/${id}`);
    console.log("classroom content", res);
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};

// Teacher

export const getTeacherClassrooms = async () => {
  try {
    attachToken();
    const res = await privateAPI.get("/api/teacher/currentcourse");
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching classroom");
  }
};
