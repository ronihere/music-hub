import React from 'react';

export default function Librarysong({ song }) {
  return (
    <div className="library-song">
      <img alt={song.name} src={song.cover}></img>
      <div className="description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
