import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from "../../styles/AssignmentsStyles";

const Assignments = () => {
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment Title"
            />
            <AddAssignmentTextArea placeholder="Enter assignment description" />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment Grade"
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment Deadline"
            />
            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList></AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignments;
