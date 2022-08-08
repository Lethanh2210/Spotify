import {Songs} from "./Context"
import DataSongs from "../../data/songs.json"
import {useState} from "react";
// import 'react-pro-sidebar/dist/css/styles.css';
import DashboardContent from "../utils/DashboardContent";
import PlayList from "./PlayList";





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
+3

export default App;
