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
            <Grid container mt={0} ml={5} >
                {artists.map(artist => (
                    <Link passHref href={`/detail/${artist.id}`}>
                        <Grid key={artist.id} item xs={1.5} ml={5} mt={3}  zeroMinWidth>
                            <CCard style={{
                                width: '165px',
                                cursor: 'pointer',
                                backgroundColor: '#171717',
                                padding: "10px",
                                color: "white",
                                height: '260px',
                                borderRadius: "3%"
                            }} className="music-search-card">
                                <CCardImage orientation="top"
                                            src={artist.images.length > 0 ? artist.images[0].url : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg"}
                                            style={{borderRadius: '50%', width: "160px", height: "160px"}}
                                            className="card-search"
                                />
                                <CCardText style={{marginTop: '15px'}}>
                                    {artist.name}
                                </CCardText>
                                <CCardBody style={{color: '#9c9c9c', marginTop: '-20px', marginLeft: "-15px"}}>
                                    Artist
                                </CCardBody>
                            </CCard>
                        </Grid>
                    </Link>))}
            </Grid>
        )

    }


    return (
        <div style={{marginTop: "-20px"}}>
            <input
            className="search"
            onChange={e => {
                setSearch(e.target.value);
                // searchArtists(e).then(() => {
                // })
            }}
            type="text"/>
            <button
                className="btn-search"
                onClick={searchArtists}
                style={{color: "black", backgroundColor: "white", border: "1px solid black"}}
            >
                Search
            </button>
            {renderArtists()}
        </div>
    )
}




