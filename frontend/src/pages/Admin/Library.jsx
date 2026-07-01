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
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/library/getall")
      setBooks(response.data.books)
    } catch (error) {
      console.error('Error fetching books', error)
    }
  }

  const addBook = async (book) => {
    try {
      const response = await axios.post('http://localhost:4000/api/vt/library/create', {
        bookname: book.title,
        author: book.author
      })
      console.log('Response data: ', response.data) // this will log the response data
      setBooks([...books, response.data])
    } catch (error) {
      console.error('Error adding book: ', error)
    }
  }

  const handleBookPick = async (bookId, studentId) => {
    // here, we can add logic when a student picks a book

  }

  const handleBookReturn = async (bookId, studentId) => {
    // here, we can handle logic when a student returns a book
  }

  return (
    <LibraryContainer style={{ paddingLeft: 250 }}>
      <Sidebar />
      <Content>
        <Title>Library Management</Title>
        <AddBookForm onSubmit={(e) => {
          e.preventDefault()
          const book = {
            id: Math.random().toString(36).substring(2, 9),
            title: e.target.title.value,
            author: e.target.author.value,
          }
          addBook(book)
        }}>
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
        <BookList>
          {books.map((book) => {
            <BookItem key={book._id}>
              <BookTitle>{book.bookname}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
              <ActionButton onClick={() => handleBookPick(book._id, student123)}>Pick</ActionButton>
              <ActionButton onClick={() => handleBookReturn(book._id, student123)}>Return</ActionButton>
            </BookItem>
          })}
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
