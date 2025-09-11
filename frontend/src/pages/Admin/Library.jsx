import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  LibraryContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton,
} from "../../styles/LibraryStyles";

const Library = () => {
  return (
    <LibraryContainer style={{ paddingLeft: 250 }}>
      <Sidebar />
      <Content>
        <Title>Library Management</Title>
        <AddBookForm>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <input type="text" id="title" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Author</Label>
            <input type="text" id="author" />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>
        <h2>Books</h2>
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
