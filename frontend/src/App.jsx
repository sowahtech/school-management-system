import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import StudentSignIn from "./components/StudentSignin";
import TeacherSignIn from "./components/TeacherSignin";
import AdminDashboard from "./pages/Admin/Dashboard";
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
