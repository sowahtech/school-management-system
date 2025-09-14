import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus,
} from "../../styles/AttendanceStyles";
const AttendanceSection = () => {
  const attendance = [
    { id: 1, date: "2025-04-01", present: true },
    { id: 2, date: "2025-04-02", present: false },
    { id: 3, date: "2025-04-03", present: true },
    { id: 4, date: "2025-04-04", present: true },
    { id: 5, date: "2025-04-05", present: true },
  ];

  return (
    <AttendanceContainer>
      <Sidebar>
        <Sidebar />
      </Sidebar>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>
                {present ? "Present" : "Absent"}
              </AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
