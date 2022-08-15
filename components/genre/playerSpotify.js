import {useContext, useEffect, useState} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {AudioSong} from "../Context";
import {ListPlay} from "./Context";


const PlayerSpotify = () => {

    const {song} = useContext(ListPlay);

    return (
        <div style={{position: 'fixed', bottom: 0, width: '100%', left: 0}}>
            <AudioPlayer
                autoPlay={true}
                src={song.url}
                onPlay={e => console.log('play')}
                onPause={e => console.log("onPause")}
                header={`Now Playing: ${song.name}`}
            />
        </div>
    );
};

export default PlayerSpotify;