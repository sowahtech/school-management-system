import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";

const Students = () => {
  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm>
              <AddStudentInput type="text" placeholder="Enter Student Name" />
              <AddStudentInput
                type="text"
                placeholder="Enter Registration Number"
              />
              <AddStudentInput type="text" placeholder="Enter Grade" />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            <StudentList></StudentList>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
