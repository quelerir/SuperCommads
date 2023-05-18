import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./ui/NavBar";
import CabinetPage from "./cabinet/CabinetPage";
import Mainpage from "./mainpage/mainpage";
import Bookpage from "./mainpage/bookpage";
import AddBookPage from "./addbook/AddBookPage";
import SignUpPage from "./Auth/SignUpPage";
import LoginPage from "./Auth/LoginPage";

export default function App({ allbooks, book, user, comments }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/books" element={<Mainpage allbooks={allbooks} />} />
        <Route path="books/:id" element={<Bookpage book={book} comments={comments} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cabinet" element={<CabinetPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
      </Routes>
    </div>
  );
}
