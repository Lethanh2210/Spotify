import {Songs} from "../playlistHome/Context"
import DataSongs from "../../data/songs.json"
import {useState} from "react";
import DashboardContent from "../utils/DashboardContent";
import Card from "./card";
import {Grid} from "@mui/material";
import authors from "../../data/author.json"

// const authors = ["Alan Walker", 'LT2k', "Justin Bieber", "Camila Cabello","The Chainsmokers","The Chainsmokers","The Chainsmokers","The Chainsmokers","The Chainsmokers"]

function App() {
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
            <div>
                <DashboardContent>
                    <Grid container mt={2} ml={-5} >
                    {authors.map((author, index) => (
                        <Grid item xs={1.8} key={index}  mt={3}>
                        <Card author={author}/>
                        </Grid>
                    ) )}
                    </Grid>
                </DashboardContent>
            </div>
        </Songs.Provider>
    );
}

export default App;
