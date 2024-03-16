import React from "react";
import "./App.css";
import Book from "./page/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./page/CreateBook";
import EditBook from "./page/EditBook";
import DeleteBook from "./page/DeleteBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

