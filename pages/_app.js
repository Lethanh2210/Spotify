import '../styles/globals.css';
import '../styles/Dashboard.css';
import '../styles/playList.css';
import '../styles/scrollBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login/Login";
import {SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react";
import {AuthorSong , AudioSong} from "../components/Context"
import DataSongs from "../data/songs.json"




export default function MyApp({Component, pageProps: {session, ...pageProps},}) {
    const [token,setToken] = useState('')
    const [authorSong, setAuthorSong] = useState([])
    const [currentList, setCurrentList] = useState([])
    const handleSetAuthorSong = (authorName) =>{
        const song = DataSongs.filter(song => song.author === authorName)
        setAuthorSong(song);
    }
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

    useEffect(()=>{
        const token =  window.localStorage.getItem('token');
        setToken(token)
    })

    return (
        <SessionProvider session={session}>
            <AudioSong.Provider value={{song, handleSetSong, DataSongs, setCurrentList, currentList}}>
            <AuthorSong.Provider value={{handleSetAuthorSong, authorSong}}>
            {token ? <Component {...pageProps} /> : <Login/> }
            </AuthorSong.Provider>
            </AudioSong.Provider>
        </SessionProvider>

    )
}


