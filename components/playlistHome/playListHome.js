import {Songs} from "./Context"
import DataSongs from "../../data/songs.json"
import {useContext, useEffect, useState} from "react";

import DashboardContent from "../utils/DashboardContent";
import PlayList from "./PlayList";
import {AudioSong} from "../Context";




function App() {
    const {setCurrentList} = useContext(AudioSong)

    useEffect(() => {
        setCurrentList(DataSongs)
    }, [])


    return (
        <Songs.Provider value={{DataSongs}}>
        <div>
            <DashboardContent>
                <PlayList/>
            </DashboardContent>
        </div>
        </Songs.Provider>
    );
}

export default App;
