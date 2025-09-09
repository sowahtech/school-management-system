import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from "../../styles/ExamStyles";

const Exams = () => {
  const calculateTotalMarks = () => {
    let total = 0;
    for (i = 0, i < examData.length; i++; ) {
      total = examData[i].marks;
    }
    return total;
  };
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name: </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Registration Number: </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Class: </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Marks: </FormLabel>
          <FormInput type="number" required />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks: {calculateTotalMarks} </h2>
        <h3>Exam Details: </h3>
        <ul></ul>
      </Content>
    </ExamContainer>
  );
};

export default Exams;
