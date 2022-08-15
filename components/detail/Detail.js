import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import id from "faker/lib/locales/id_ID";

export default function Detail() {
    const [token, setToken] = useState('');
    const [idArtist, setIdArtist] = useState('');
    const [album,setAlbum] = useState([]);
    const [artist,setArtist] = useState({});
    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])
    useEffect(() => {
        const id = window.location.href.split('/')[4];
        setIdArtist(id)
    },[idArtist])
    useEffect(async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${idArtist}/`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setArtist(data)
    },[idArtist])
    console.log(artist)


    useEffect(async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${idArtist}/albums`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        console.log(data.items)
        setAlbum(data.items)
    },[idArtist])
    return (
        <div>
            <h1 className="artist-name">{artist.name ? artist.name : "nothing"}</h1>
            <span className="text-4xl text-white">Follower: {artist.followers.total ? artist.followers.total : "nothing"}</span>
            <img src={artist.images[0].url} className=" z0 w-full h-full" alt="no"/>
        </div>
    )
}