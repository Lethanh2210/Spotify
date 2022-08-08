import {useContext, useEffect, useState} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {Songs} from "./Context";


const Player = () => {
    const {song, handleSetSong} = useContext(Songs);

    const handleClickNext = () => {
        handleSetSong(song[0].id + 1);
    }

    const handleClickPrevious = () => {
        handleSetSong(song[0].id - 1);
    }

    return (
        <div style={{position: 'fixed', bottom: 0, width: '100%', left: 0}}>
            <AudioPlayer
                autoPlay={true}
                src={song[0].url}
                onPlay={e => console.log('play')}
                onPause={e => console.log("onPause")}
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                header={`Now Playing: ${song[0].name}`}
            />
        </div>
    );
};

export default Player;