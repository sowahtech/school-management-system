import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import StudentSignIn from "./components/StudentSignin";
import TeacherSignIn from "./components/TeacherSignin";
import AdminDashboard from "./pages/Admin/Dashboard";

import Announcement from "./pages/Admin/Announcement";
import Assignments from "./pages/Admin/Assignments";
import Attendance from "./pages/Admin/Attendance";
import Classes from "./pages/Admin/Classes";
import EventCalendar from "./pages/Admin/EventCalendar";
import Exams from "./pages/Admin/Exams";
import Library from "./pages/Admin/Library";
import Performance from "./pages/Admin/Performance";
import SettingsProfile from "./pages/Admin/SettingsProfile";
import Sidebar from "./pages/Admin/Sidebar";
import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-user" element={<ChooseUser />} />

          {/* All the sign in pages-routes */}
          <Route exact path="/admin-signIn" element={<AdminSignIn />} />
          <Route exact path="/student-signIn" element={<StudentSignIn />} />
          <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

          {/* All the dashboard Routes */}
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
