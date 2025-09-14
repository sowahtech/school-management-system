import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  LibraryContainer,
  SidebarContainer,
  Content,
  LibraryHeader,
  BookList,
  BookItem,
  BookTitle,
  BorrowButton,
} from "../../styles/LibraryStyles";

const LibrarySection = () => {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        {/* here we will map through the books coming from the database */}
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  );
};

export default LibrarySection;
