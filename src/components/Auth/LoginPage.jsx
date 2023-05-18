import axios from 'axios';
import React from 'react';
// import Background from './images/SignUpLogin.jpg';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      '/auth/login',
      Object.fromEntries(new FormData(e.target))
    );

    if (response.status === 200) {
      window.location = '/books';
    }
  };

  return (
    <div className="card">
      <img
        src="./images/SignUpLogin.jpg"
        className="card-img"
        alt="SignUpLogin"
      />
      <div className="container d-flex min-vh-100 justify-content-center align-items-center card-img-overlay">
        <form onSubmit={submitHandler}>
          <div className="form-group mx-auto">
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
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
