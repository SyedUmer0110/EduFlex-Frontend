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

export const applyJob = async(jobId, formData) => {
  try {
      attachToken()
      const res = await privateAPI.post(`/api/jobs/apply/${jobId}`,formData );
      if (res?.status === 200 || res?.status === 201) {
          console.log(res?.data);
          return res?.data
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error while fetching classroom");
    }
}
export const downloadApplications = async(jobId) => {
  try {
      attachToken()
      const res = await privateAPI.get(`/api/jobs/download/${jobId}` );
      if (res?.status === 200 || res?.status === 201) {
          // console.log(res?.data);
          return res?.data
      }
    } catch (err) {
      console.log(err);
      toast.error("There was an error while fetching classroom");
    }
} 