import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

export const getPosts = async () => {
  try {
    attachToken();
    const res = await privateAPI.get("/api/post");
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching general posts");
  }
};

export const createPost = async (payload) => {
  try {
    attachToken();
    const res = await privateAPI.post("/api/post/create", payload);
    if (res?.status === 200 || res?.status === 201) {
      console.log(res?.data);
      return res?.data;
    }
  } catch (err) {
    console.log(err);
    toast.error("There was an error while fetching general posts");
  }
};
