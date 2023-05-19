import axios from 'axios';
import React, { useState } from 'react';

export default function AddBookPage() {
  const [input, setInput] = useState({
    bookname: '',
    author: '',
    bookannotation: '',
    img: '',
  });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const responce = await axios.post('/addbook', input);
    if (responce.status === 200) {
      window.location = '/books';
    }
  };

  return (
    <div className="card-login">
      <div className="form-container d-flex min-vh-100 justify-content-center align-items-center">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              name="bookname"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ margin: '10px' }}
              placeholder="Название книги"
              onChange={changeHandler}
              value={input.bookname}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="author"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ margin: '10px' }}
              placeholder="Автор книги"
              onChange={changeHandler}
              value={input.author}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="bookannotation"
              aria-label="With textarea"
              style={{ margin: '10px' }}
              className=" text form-control"
              placeholder="Краткое содержание"
              onChange={changeHandler}
              value={input.bookannotation}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="img"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ margin: '10px' }}
              placeholder="URL обложки"
              onChange={changeHandler}
              value={input.img}
              required
            />
          </div>
          <button type="submit" className="addbtn-login">
            Добавить книгу
          </button>
        </form>
      </div>
    </div>
  );
}
