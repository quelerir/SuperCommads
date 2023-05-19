import React from 'react';
import OneFavoriteBook from './OneFavoriteBook';

export default function CabinetPage({ favoriteBooks, user }) {
  return (
    <div className="row justify-content-evenly wrapper">
      <h1>привет! {user.username}</h1>
      {favoriteBooks?.map((favorite) => (
        <OneFavoriteBook key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
}
