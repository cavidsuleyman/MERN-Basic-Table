import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="create-page">
      <Link to="/">Back</Link>

      <p>Are You Sure You want to delete this book?</p>
      <button onClick={handleDeleteBook}>Yes, Delete it</button>
    </div>
  );
};

export default DeleteBook;
