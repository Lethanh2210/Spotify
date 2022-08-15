import {useRouter} from "next/router";
import axios from "axios";
import {useContext, useEffect} from "react";
import {useState} from "react";
import {AuthorSong , AudioSong, Location} from "../Context"
import DashboardContent from "../utils/DashboardContent";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";


import CardPlayList from "./cardPlayList";

export default function Genre() {
    const router = useRouter();
    const [playList, setPlayList] = useState();
    const {token, setToken} = useContext(Location)


    useEffect(async () =>  {
        const {data} = await axios.get(`https://api.spotify.com/v1/browse/categories/${router.query.id}/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',

            }
        })
        if(data.playlists){
            setPlayList(data)
        }
    }, [])





    return (
        <div >
            <DashboardContent>
                <Grid container mt={1} ml={-5}>
                    <Typography variant="h3" component="h4" mt={0} ml={5} sx={{
                        color: 'white',
                    }}>
                        PlayList
                    </Typography>
                    <Grid container mt={0} ml={5}>
                        {playList ? playList.playlists.items.map((item, index) => (
                            <Grid item xs={2} key={index} mt={3}>
                                <CardPlayList playList={playList} image={item.images[0].url} name={item.name} id={item.id}/>
                            </Grid>
                        )): "fuck"}
                    </Grid>
                </Grid>
            </DashboardContent>
        </div>
    )
}