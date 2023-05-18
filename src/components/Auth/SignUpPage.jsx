import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      '/auth/signup',
      Object.fromEntries(new FormData(e.target))
    );

    if (response.status === 200) {
      window.location = '/books';
    }
  };
  return (
    <div className="container d-flex min-vh-100 justify-content-center align-items-center">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleUsername">
            Введите Ваше имя:
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="exampleEmail">
            Введите Ваш email:
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="examplePassword">
            Введите Ваш пароль:
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
