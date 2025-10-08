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
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment title"
            />
            <AddAssignmentTextArea placeholder="enter assignment description" />
            <AddAssignmentInput
              type="text"
              placeholder="enter assignment grade"
            />
            <AddAssignmentInput
              type="text"
              placeholder="enter assignment deadline"
            />
            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {/* We will display all the assignments here */}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
