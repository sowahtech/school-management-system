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
  AddAssignmentButton,
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
            {!assignment.done ? (<AssignmentForm onDoAssignment={() => handleDoAssignment(assignment.id)} />)
              : (<AssignmentDoneMessage>Assignment is done</AssignmentDoneMessage>)}
          </AssignmentCard>
        })}
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = (onDoAssignment) => {
  const [opinion, setOpinion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (opinion.trim !== '') {
      onDoAssignment()
    } else {
      alert('Please provide your opinion/Assignment')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={opinion} onChange={handleInputChange} placeholder="Enter your opinion/Assignment" />
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  )
}

export default StudentAssignments;
