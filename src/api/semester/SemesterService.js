import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

export const addSemester = async (payload) => {
  try {
    attachToken();
    const res = await privateAPI.post("/api/semester/addsemester", payload);
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};

export const endSemester = async (payload) => {
  try {
    attachToken();
    const res = await privateAPI.get(
      `/api/semester/endsemester/${payload?.id}/${payload?.date}`
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

export const getSemesters = async () => {
  try {
    attachToken();
    const res = await privateAPI.get("/api/semester/getsemesters");
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};

export const startRegistration = async (id) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/api/semester/startregistration/${id}`);
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};

export const endRegistration = async (id) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/api/semester/endregistration/${id}`);
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching scholarships");
  }
};
