import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateBook = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {title, author, publishYear, price};

        setLoading(true);

        axios.post('http://localhost:3000/books', data)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((err) => {
            setLoading(false);
            console.log(err.message);
        })
    }


  return (
    <div className='create-page'>
      <Link to='/'>
        Back
      </Link>
         <div className='input-form'>
            <p>Title</p>
            <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
         </div>
         <div className='input-form'>
            <p>Author</p>
            <input type='text' placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
         </div>
         <div className='input-form'>
            <p>Publish Year</p>
            <input type='number' placeholder='Publish Year' value={publishYear} onChange={(e) => setPublishYear(e.target.value)}/>
         </div>
         <div className='input-form'>
            <p>Price</p>
            <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
         </div>
         <button type='Submit' onClick={handleSaveBook}>Save</button>

    </div>
  )
}

export default CreateBook

