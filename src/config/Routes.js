import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Attendance from "../pages/Attendance";
import Marks from "../pages/Marks";
import ClassRoom from "../pages/ClassRoom";
import ClassRoomDetails from "../pages/ClassRoomDetails";
import Jobs from "../pages/Jobs";
import Scholarships from "../pages/Scholarships";
import SocietyUpdates from "../pages/SocietyUpdates";
import GeneralAnnouncement from "../pages/GeneralAnnouncement";
import Lectures from "../pages/Lectures";
import Feedback from "../pages/Feedback";
import CourseRegistration from "../pages/CourseRegistration"
import AddAttendance from "../pages/AddAttendance";


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/course-registration" element={<CourseRegistration />} />
        <Route path="/classrooms" element={<ClassRoom />} />
        <Route path="/classrooms/:id" element={<ClassRoomDetails />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/addAttendance" element={<AddAttendance />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/updates" element={<SocietyUpdates />} />
        <Route path="/announcements" element={<GeneralAnnouncement />} />
      


      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
