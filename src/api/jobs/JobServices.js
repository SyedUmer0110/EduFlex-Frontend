import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import { privateAPI, attachToken } from "../../config/Constants";
export const getJobs = async() => {
    try {
        attachToken()
        const res = await privateAPI.get("/api/job");
        if (res?.status === 200) {
            console.log(res?.data);
            return res?.data
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error while fetching classroom");
      }
}
