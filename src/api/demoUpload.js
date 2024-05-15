import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../config/Constants";

export const uploadFile = async (payload) => {
    try {
      attachToken();
      const res = await privateAPI.post(`/api/content/upload/3spring202423SEA`, payload);
      if (res) {
        return res?.data;
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error");
    }
  };