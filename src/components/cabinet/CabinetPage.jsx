import React from "react";
import OneFavoriteBook from "./OneFavoriteBook";

export default function CabinetPage({ favoriteBooks, user }) {
  return (
    <div className="card-login">
      <h2 className="title">Привет, {user.username}!</h2>
      <div className="row justify-content-evenly wrapper">
        {favoriteBooks?.map((favorite) => (
          <OneFavoriteBook key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
}
