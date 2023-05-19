import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneSearch from './OneSearch';

export default function NavBar({ user }) {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const searchHandler = async (e) => {
      try {
        setSearchResult([]);
        const response = await axios.post('/books/search', { search });
        setSearchResult(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    searchHandler();
  }, [search]);

  const logoutHandler = async () => {
    const res = await axios('/auth/logout');
    if (res.status === 200) {
      window.location = '/books';
    }
  };

  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
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
            <form  className="d-flex search-form" role="search">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                name="bookname"
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                autoComplete="off"
              />
            </form>
            <ul
              style={{
                position: 'absolute',
                left: '1000px',
                top: '58px',
                zIndex: '1',
              }}
              className="list-group"
            >
              {searchResult.map((searchBook) => (
                <OneSearch key={searchBook.id} searchBook={searchBook} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
