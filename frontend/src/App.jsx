import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import School from "./school/School";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* SCHOOL ROUTE */}
          <Route path="school" element={<School />}></Route>
          {/* STUDENT */}
          <Route></Route>
          {/* TEACHER */}
          <Route></Route>
          {/* CLIENT */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
