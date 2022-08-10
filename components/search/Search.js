import {useEffect, useState} from "react";
import axios from "axios";
import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {Grid} from "@mui/material";
import Link from "next/link";

export default function Search() {
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');
    const [artists, setArtists] = useState([]);
    const [image, setImage] = useState('');
    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])
    console.log(artists)
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: search,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }
    const hover = (e) => {
        e.target.style.backgroundColor = "#282828"
    }
    const out = (e) => {
        e.target.style.backgroundColor = "#181818"
    }
    const renderArtists = () => {
        return (
            <Grid container mt={2} ml={-5}>
                {artists.map(artist => (
                    <Link passHref href={`/detail/${artist.id}`}>
                        <Grid key={artist.id} item xs={1.5} ml={5} mt={3}>
                            <CCard style={{
                                width: '165px',
                                cursor: 'pointer',
                                backgroundColor: '#171717',
                                padding: "10px",
                                color: "white",
                                height: '243px',
                                borderRadius: "3%"
                            }} className="musicCard">
                                <CCardImage orientation="top" src={artist.images.length > 0 ? artist.images[0].url : ""}
                                            style={{borderRadius: '50%', width: 160, height: 160}}/>
                                <CCardText style={{marginTop: '15px'}}>
                                    {artist.name}
                                </CCardText>
                                <br/>
                                <CCardBody style={{color: '#9c9c9c', marginTop: '-15px'}}>
                                    Artist
                                </CCardBody>
                            </CCard>
                        </Grid>
                    </Link>))}
            </Grid>
        )

    }


    return (
        <div>
            <input
                className="search"
                onChange={e => {
                    setSearch(e.target.value)
                }}
                type="text"/>
            <button
                classNameName="btn-search"
                onClick={searchArtists}
            >
                Search
            </button>
            {renderArtists()}
        </div>
    )
}




