import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  ClassContainer,
  Content,
  ClassesContent,
  ClassHeader,
  ClassList,
  ClassItem,
  AddClassButton,
  AddClassForm,
  AddClassInput,
} from "../../styles/ClassesStyles";

const Classes = () => {
  return (
    <ClassContainer style={{ paddingLeft: 250 }}>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput type="text" placeholder="Enter class name" />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList></ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  );
};

export default Classes;
