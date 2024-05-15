import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

export const getLectures = async(id) => {
    try {
        const classroom = "3Spring202323CSA";
        attachToken()
        const res = await privateAPI.get(`/api/feedback/lectures/${id}`);
        if (res?.status === 200 || res?.status === 201) {
            console.log(res?.data);
            return res?.data
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error while fetching lectures");
      }
}

export const addFeedback = async(lect_id, obj) => {
  try {
      const classroom = "3Spring202323CSA";
      attachToken()
      const res = await privateAPI.post(`/api/feedback/add/${classroom}/lecture/${lect_id}`, obj);
      console.log(res?.data);
      if (res?.data?.status === true) {
          console.log(res?.data);
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

export const getAvgRating = async() => {
  try {
      const classroom = "3Spring202323CSA";
      attachToken()
      const res = await privateAPI.get(`/api/feedback/rating/${classroom}`);
      console.log(res?.data);
      if (res?.data) {
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

export const getFeedbacks = async(id) => {
  try {
      const classroom = "3spring202423SEA";
      attachToken()
      const res = await privateAPI.get(`/api/feedback/feedback/${classroom}`);
      console.log(res?.data);
      if (res?.data) {
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