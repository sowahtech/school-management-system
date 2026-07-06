import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
} from "../../styles/AttendanceStyles";

const CheckAttendanceSection = () => {

  const [students, setStudents] = useState([])
  const [attendanceData, setAttendanceData] = useState([])

  useEffect(() => {
    fetchStudents();
  }, [])
  // we are fetching students cos we are to mark attendance based on the students registered in the system
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/students/getall")
      setStudents(response.data.students)
      InitializeAttendanceData(response.data.students)
    } catch (error) {
      console.error('Error fetching students', error)
    }
  }

  const InitializeAttendanceData = (students) => {
    const InitializeAttendanceData = students.map((student) => {
      {
        id: student.id;
        name: student.name;
        status: 'Present'
      }
    })
    setAttendanceData(InitializeAttendanceData)
  }

  const handleStatusChange = (id, status) => {
    const upDateData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status }
      }
      return student
    })
    setAttendanceData(InitializeAttendanceData)
  }

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({ studentId: id, name, status }))
      const response = await axios.post('http://localhost:4000/api/vt/attendance/create', { attendanceData: formattedData })
    } catch (error) {
      console.error('Error submitting attendance data: ', error)
    }
  }

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            {StudentName.map((student, id) => {
              <React.Fragment key={student.id}>
                <AttendanceItem>
                  <StudentName>{student.name}</StudentName>
                  <CheckboxLabel>
                    <input type="checkbox" checked={attendanceData[index].status === 'Present'} onChange={() => handleStatusChange(student.id), 'Present'} />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input type="checkbox" checked={attendanceData[index].status === 'Absent'} onChange={() => handleStatusChange(student.id), 'Absent'} />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input type="checkbox" checked={attendanceData[index].status === 'Absent with Apology'} onChange={() => handleStatusChange(student.id), 'Absent with Apology'} />
                    Absent with apology
                  </CheckboxLabel>
                </AttendanceItem>
              </React.Fragment>
            })}
          </AttendanceList>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;
