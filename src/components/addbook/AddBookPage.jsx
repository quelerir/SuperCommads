import axios from "axios";
import React, { useState } from "react";

export default function AddBookPage() {
  const [input, setInput] = useState({
    bookname: "",
    author: "",
    bookannotation: "",
    img: "",
  });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const responce = await axios.post("/addbook", input);
    if (responce.status === 200) {
      window.location = "/books";
    }
  };

  return (
    <div className="card-login">
      <div className="form-container d-flex min-vh-100 justify-content-center align-items-center">
        <div className="input-group mb-3">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                name="bookname"
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                style={{ margin: "10px" }}
                placeholder="Название книги"
                onChange={changeHandler}
                value={input.bookname}
              />
            </div>
            <input
              name="author"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ margin: "10px" }}
              placeholder="Автор книги"
              onChange={changeHandler}
              value={input.author}
            />
            <textarea
              name="bookannotation"
              className="form-control"
              aria-label="With textarea"
              style={{ margin: "10px" }}
              placeholder="Краткое содержание"
              onChange={changeHandler}
              value={input.bookannotation}
            />
            <input
              name="img"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              style={{ margin: "10px" }}
              placeholder="URL обложки"
              onChange={changeHandler}
              value={input.img}
            />
            <button type="submit" className="btn btn-primary">
              Добавить книгу
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
