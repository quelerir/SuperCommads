import React from 'react';
import OneFavoriteBook from './OneFavoriteBook';

export default function CabinetPage({ favoriteBooks }) {
  return (
    <div className="row justify-content-evenly wrapper">
      {favoriteBooks?.map((favorite) => (
        <OneFavoriteBook key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
}
