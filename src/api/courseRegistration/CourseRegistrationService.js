import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/Constants";

export const getAvailableCourses = async() => {
    try {
        attachToken()
        const res = await privateAPI.get(`/api/student/courseregistration/page`);
        if (res?.status === 200 || res?.status === 201) {
            console.log(res?.data);
            return res?.data
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error while fetching scholarships");
      }
}