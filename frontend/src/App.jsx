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

import StudentDashboard from "./pages/Students/Dashboard";
import StudentAssignments from "./pages/Students/Assignments";
import ExamSection from "./pages/Students/Exams";
import PerformanceSection from "./pages/Students/Performance";
import AttendanceSection from "./pages/Students/Attendance";
import LibrarySection from "./pages/Students/Library";
import AnnouncementSection from "./pages/Students/Announcements";
import ProfileSection from "./pages/Students/Profile";

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
          <Route
            exact
            path="/student/dashboard"
            element={<StudentDashboard />}
          />

          {/* Admin sections here */}
          <Route
            exact
            path="/admin/communications"
            element={<Announcement />}
          />
          <Route exact path="/admin/assignments" element={<Assignments />} />
          <Route exact path="/admin/attendance" element={<Attendance />} />
          <Route exact path="/admin/classes" element={<Classes />} />
          <Route exact path="/admin/events" element={<EventCalendar />} />
          <Route exact path="/admin/exams" element={<Exams />} />
          <Route exact path="/admin/library" element={<Library />} />
          <Route exact path="/admin/performance" element={<Performance />} />
          <Route exact path="/admin/settings" element={<SettingsProfile />} />
          <Route exact path="/admin/sidebar" element={<Sidebar />} />
          <Route exact path="/admin/students" element={<Students />} />
          <Route exact path="/admin/teachers" element={<Teachers />} />

          {/* Student Sections */}
          <Route
            exact
            path="/student/assignments"
            element={<StudentAssignments />}
          />
          <Route exact path="/student/exams" element={<ExamSection />} />
          <Route
            exact
            path="/student/performance"
            element={<PerformanceSection />}
          />
          <Route
            exact
            path="/student/attendance"
            element={<AttendanceSection />}
          />
          <Route exact path="/student/library" element={<LibrarySection />} />
          <Route
            exact
            path="/student/communications"
            element={<AnnouncementSection />}
          />
          <Route exact path="/student/settings" element={<ProfileSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
