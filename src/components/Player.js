import React, {  useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

export default function Player({ currentSong , isPlaying , setIsPlaying ,audioRef}) {
  

  //functions
  function getTime(time){
    return (
      Math.floor(time / 360) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }
//event handlers
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
    // console.log(audioRef.current);
  }

  const timeUpdateHandler = (event) => {
    setSongInfo({
      duration: event.target.duration,
      currentTime: event.target.currentTime,
    });
    // console.log(event);
  }

  const dragHandler = (event) =>{
    
    audioRef.current.currentTime = event.target.value;
    console.log(event.target.value);
    setSongInfo({
      ...songInfo,
      currentTime: event.target.value,
    });
  }
  //state
  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
  });

  return (
    <div className="Player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={String(songInfo.duration)}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back svg"
          size="2x"
          icon={faAngleLeft}
        ></FontAwesomeIcon>
       
          <FontAwesomeIcon
            className="play"
            icon={isPlaying ? faPause : faPlay}
            onClick={playSongHandler}
            size="2x"
          />

        <FontAwesomeIcon
          className="skip-forward svg"
          size="2x"
          icon={faAngleRight}
        ></FontAwesomeIcon>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}
