import {Songs} from "./Context"
import DataSongs from "../../data/songs.json"
import {useState} from "react";

import DashboardContent from "../utils/DashboardContent";
import PlayList from "./PlayList";




function App() {
    const [song, setSong] = useState([{
        url: '',
        name: 'none'
    }]);

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
        <div>
            <DashboardContent>
                <PlayList/>
            </DashboardContent>
        </div>
        </Songs.Provider>
    );
}

export default App;