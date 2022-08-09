import {Songs} from "./Context"
import DataSongs from "../../data/songs.json"
import {useState} from "react";

import DashboardContent from "../utils/DashboardContent";
import PlayList from "./PlayList";
// import ListSongs from "./PlayList1";




function App() {
    const [song, setSong] = useState(DataSongs);

    const handleSetSong = (idSong) => {
        const song = DataSongs.filter(song => song.id === idSong);
        if (song === []) {
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
