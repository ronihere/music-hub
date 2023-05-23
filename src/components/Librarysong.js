import React from "react";

export default function Librarysong({
  song,
  setCurrentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  songs,
  setSongs,
}) {
  let songSelectHandler = () => {
    setCurrentSong(song);
    songs.forEach(element => {
      console.log(':::', element.id);
    });
    let newSongs = songs.map((allSong) => {
      // console.log(song.id);
      if (allSong.id === song.id) {
        return {
          ...allSong,
          active: true,
        };
      } else {
        
        return {
          ...allSong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    song.active = true;
    
    audioRef.current.play().then((data) => {
      audioRef.current.play();
    });
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
