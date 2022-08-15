import {Songs} from "../playlistHome/Context"
import DataSongs from "../../data/songs.json"
import {useContext, useState} from "react";
import DashboardContent from "../utils/DashboardContent";
import Card from "./cardStore/card";
import {Grid} from "@mui/material";
import authors from "../../data/author.json";
import locations from "../../data/location.json";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import CardLocation from "./cardStore/cardLocation";


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
            <DashboardContent>
                <Grid container mt={1} ml={-5}>
                    <Typography variant="h3" component="h4" mt={0} ml={5} sx={{
                        color: 'white',
                    }}>
                        List Artist
                    </Typography>
                    {/*<hr className="text-white"/>*/}
                    <Grid container mt={0} ml={5}>
                        {authors.map((author, index) => (
                            <Grid item xs={2} key={index} mt={3}>
                                <Card author={author}/>
                            </Grid>
                        ))}
                    </Grid>
                    <hr
                        style={{
                            color: "gray",
                            backgroundColor: "gray",
                            height: 20,
                        }}
                    />
                    <Typography variant="h3" component="h4" mt={3} ml={5} sx={{
                        color: 'white',
                    }}>
                        Location
                    </Typography>

                    <Grid container mt={0} ml={5}>
                        {locations.map((location, index) => (
                            <Grid item xs={2} key={index} mt={3}>
                                <CardLocation location={location}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </DashboardContent>
        </Songs.Provider>
);
}

export default App;
