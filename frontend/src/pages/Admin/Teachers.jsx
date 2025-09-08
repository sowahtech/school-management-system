import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from "../../styles/TeachersStyles";

const Teachers = () => {
  return (
    <TeachersContainer>
      <Sidebar />
      <Content>
        <TeachersContent>
          <TeachersHeader>
            <AddTeacherForm>
              <AddTeacherInput type="text" placeholder="Enter Teacher Name" />
              <AddTeacherInput type="email" placeholder="Enter Teacher Email" />
              <AddTeacherInput
                type="text"
                placeholder="Enter Teacher Subject"
              />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>
            <TeacherList></TeacherList>
          </TeachersHeader>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
