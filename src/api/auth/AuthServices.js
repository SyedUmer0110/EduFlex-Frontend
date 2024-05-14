import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import { publicAPI } from "../../config/Constants";

export const studentLogin = async(payload, navigate) => {
    try {
        const res = await publicAPI.post("/api/student/signin", payload);
        if (res?.data?.status) {
          toast.success("Login Successfully");
          setTimeout(() => {
            const decodedPayload = jwtDecode(res?.data?.token, { payload: true });
            console.log("res?.data?.token", res?.data?.token);
            console.log("decoded token", decodedPayload);
            const role = decodedPayload?.authorities?.[0]?.authority
            localStorage.setItem("role", role)
            localStorage.setItem("token", res?.data?.token);
            navigate("/");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error");
      }
}

export const adminLogin = async(payload, navigate) => {
    try {
        const res = await publicAPI.post("/api/admin/signin", payload);
        if (res?.data?.status) {
          toast.success("Login Successfully");
          setTimeout(() => {
            const decodedPayload = jwtDecode(res?.data?.token, { payload: true });
            console.log("res?.data?.token", res?.data?.token);
            console.log("decoded token", decodedPayload);
            const role = !decodedPayload?.authorities?.[0]?.authority && "Role_ADMIN"
            localStorage.setItem("role", role)
            localStorage.setItem("token", res?.data?.token);
            navigate("/");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error");
      }
}

export const adminTeacher = async(payload, navigate) => {
    try {
        const res = await publicAPI.post("/api/teacher/signin", payload);
        if (res?.data?.status) {
          toast.success("Login Successfully");
          setTimeout(() => {
            const decodedPayload = jwtDecode(res?.data?.token, { payload: true });
            console.log("res?.data?.token", res?.data?.token);
            console.log("decoded token", decodedPayload);
            const role = decodedPayload?.authorities?.[0]?.authority
            localStorage.setItem("role", role)
            localStorage.setItem("token", res?.data?.token);
            navigate("/");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
        toast.error("There was an error");
      }
}