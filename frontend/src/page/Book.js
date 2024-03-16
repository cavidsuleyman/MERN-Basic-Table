import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        console.log(res.data.data);
        setBookData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="main">
        <Link to="/books/create">
          <button>Add</button>
        </Link>

        <table border={1} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Price</th>
              <th>Edit&Delete</th>
            </tr>
          </thead>

          <tbody>
            {bookData.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <th>{book.title}</th>
                <th>{book.author}</th>
                <th>{book.publishYear}</th>
                <th>{book.price}$</th>
                <th>
                  <Link to={`/books/edit/${book._id}`}>
                    <button>Edit</button>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <button>Delete</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Book;
