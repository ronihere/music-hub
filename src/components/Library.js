import React from 'react';
import Librarysong from './Librarysong.js';
export default function Library({songs , currentSong}){
  return (
    <div className='library'>
          <h2>Library</h2>
          <div className='library-songs'>
        {songs.map((Song) => {
          return (
            <Librarysong song={Song} key={ Song.id} />)
              })}   
          </div>
      
    </div>
  )
}
