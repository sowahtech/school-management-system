import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentTitle,
  AddAssignmentForm,
  AddAssignmentButton,
  AddAssignmentInput,
  AddAssignmentTextArea,
} from "../../styles/AssignmentsStyles";

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' })
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

  const handleAddAssignments = async (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/vt/assignments/create', newAssignment)
        console.log('Response data: ', response.data) // this will log the response data
        setAssignments([...assignments, response.data.assignments])
        setNewAssignments({ title: '', description: '', grade: '', deadline: '' })
      } catch (error) {
        console.error('Error adding assignment: ', error)
      }
    }
  }

  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignments}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment Title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignments({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea placeholder="Enter assignment description" value={newAssignment.description}
              onChange={(e) => setNewAssignments({ ...newAssignment, description: e.target.value })} />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment Grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignments({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment Deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignments({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments.map((assignment) => {
              <AssignmentItem key={assignment.id}>
                <strong>{assignment.title}: </strong>
                {assignment.description},{assignment.grade},{assignment.deadline}
              </AssignmentItem>
            })}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
