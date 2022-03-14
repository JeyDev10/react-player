/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import eazy from '../../assets/musics/eazy.mp3';
// import ReactAudioPlayer from 'react-audio-player';

export default function Player() {
  useEffect(() => {
    console.log(eazy);
  }, [eazy]);

  return (
    <div>

      <ReactAudioPlayer
        className="react-player"
        controls
        // autoPlay
        src={eazy}
      />
      {/* <ReactAudioPlayer
        className="react-player"
        controls
        autoPlay
      >
        <source src={eazy} type="audio/mpeg" />
        Your browser does not support the
      </ReactAudioPlayer> */}
    </div>
  );
}
