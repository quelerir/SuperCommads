import React from 'react';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const res = await axios('/auth/logout');
    if (res.status === 200) {
      window.location = '/books';
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/books">
            <img
              style={{ width: '30px', height: '30px' }}
              src="https://www.svgrepo.com/show/269032/book.svg"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/addbook">
                    Add a book
                  </a>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/cabinet">
                    Profile
                  </a>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    SignUp
                  </a>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <a onClick={logoutHandler} className="nav-link" href="/">
                    LogOut
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
