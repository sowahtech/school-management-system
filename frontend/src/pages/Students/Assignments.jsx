import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentButton,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentDoneMessage,
} from "../../styles/AssignmentsStyles";

const StudentAssignments = () => {

  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    fetchAssignments();
  }, [])

  const fetchAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/assignments/getall")
      setAssignments(response.data.assignments)
    } catch (error) {
      console.error('Error fetching assignments', error)
    }
  }

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment, id) => {
          <AssignmentCard>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>
          </AssignmentCard>
        })}
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;
