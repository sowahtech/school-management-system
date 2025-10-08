import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  ClassContainer,
  SidebarContainer,
  Content,
  ClassHeader,
  ClassList,
  ClassItem,
} from "../../styles/ClassesStyles";

const ClassSection = () => {
  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList>
          {/* Here we will map and display all the classes/grades later */}
        </ClassList>
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
