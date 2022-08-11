import {useContext, useEffect, useState} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {AudioSong} from "../Context";


const Player = () => {
    const {song, handleSetSong, currentList} = useContext(AudioSong);



    const handleClickNext = () => {
        const currentIndex = currentList.findIndex(song1 => song1.id === song[0].id);
        if(currentIndex === currentList.length - 1) {
            handleSetSong(currentList[0].id)
        }else{
            handleSetSong(currentList[currentIndex+1].id);
        }
    }

    const handleClickPrevious = () => {
        const currentIndex = currentList.findIndex(song1 => song1.id === song[0].id);
        if(currentIndex === 0){
            handleSetSong(currentList[currentList.length-1].id)
        }else{
            handleSetSong(currentList[currentIndex-1].id);
        }
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