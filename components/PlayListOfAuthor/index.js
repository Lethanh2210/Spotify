import {Songs} from "../playlistHome/Context"
import DataSongs from "../../data/songs.json"
import {useState} from "react";
import DashboardContent from "../utils/DashboardContent";
import {Grid} from "@mui/material";


function PlayListOfAuthor() {
    const [song, setSong] = useState([{
        url: '',
        name: 'none'
    }
    ]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.filter(song => song.id === idSong);

        if (song.length === 0) {
            setSong(DataSongs[0]);
        } else {
            setSong(song)
        }
    }


    return (
        <Songs.Provider value={{DataSongs, song, handleSetSong}}>
            <div style={{overflowY: 'scroll'}}>
                <DashboardContent>
                </DashboardContent>
            </div>
        </Songs.Provider>
    );
}

export default PlayListOfAuthor;