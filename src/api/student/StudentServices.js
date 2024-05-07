import { toast } from "react-toastify";
import { privateAPI } from "../../config/Constants";

export const getStudent = async() => {
    try {
        const res = await privateAPI.get("/api/students/profile");
        if (res) {
            return res?.data
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error");
      }
}