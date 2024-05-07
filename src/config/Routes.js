import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Attendance from "../pages/Attendance";
import Marks from "../pages/Marks";
import ClassRoom from "../pages/ClassRoom";
import ClassRoomDetails from "../pages/ClassRoomDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/classrooms" element={<ClassRoom />} />
        <Route path="/classrooms/:id" element={<ClassRoomDetails />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/marks" element={<Marks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
