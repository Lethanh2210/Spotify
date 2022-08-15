import {useEffect, useState} from "react";
import axios from "axios";

export default function () {
    const [token, setToken] = useState('')
    const [idAlbum, setIdAlbum] = useState('')
    const [tracks,setTracks] = useState([])
    const [album,setAlbum] = useState({})


    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])

    useEffect(() => {
        const id = window.location.href.split('/')[4];
        setIdAlbum(id)
    }, [idAlbum])

    useEffect(async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/albums/${idAlbum}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setAlbum(data)
    }, [idAlbum])

    useEffect(async () => {
        // setIsLoading(true)
        const {data} = await axios.get(`https://api.spotify.com/v1/albums/${idAlbum}/tracks?limit=48&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setTracks(data.items)
        // setIsLoading(false)
    }, [idAlbum])


    return(
        <div className="detail">
            <div className="bg-black text-gray-300 min-h-screen p-10">
                <div className="flex">
                    <img className="mr-6 rounded-lg w-52 h-52 " src={album.name ? album?.images[0]?.url : ""}  alt=""/>
                        <div className="flex flex-col justify-center">
                            <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Albums</h4>
                            <h1 className="mt-0 mb-2 text-white text-4xl">{album.name}</h1>
                            <p className="text-gray-600 mb-2 text-sm">Release Date: {album.release_date}</p>
                            <p className="text-gray-600 text-sm">Tracks: {album.total_tracks}</p>
                        </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <div className="flex">
                        <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                    </div>
                    <div className="text-gray-600 text-sm tracking-widest text-right">
                        <h5 className="mb-1">Copyrights</h5>
                        <p>{album.name ? album.copyrights[0].text : ""}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex text-gray-600">
                        <div className="p-2 w-8 flex-shrink-0"/>
                        <div className="p-2 w-8 flex-shrink-0"/>
                        <div className="p-2 w-full">Name</div>
                        <div className="p-2 w-full">Artist</div>
                        <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
                    </div>
                    {tracks.map((track,index)=>{
                        return(
                            <div className="flex border-b border-gray-800 hover:bg-gray-800" key={index}>
                                <div className="p-3 w-8 flex-shrink-0">▶</div>
                                <div className="p-3 w-8 flex-shrink-0">♫</div>
                                <div className="p-3 w-full">{track.name}</div>
                                <div className="p-3 w-full">{album.name ?  track.artists[0].name : ""}</div>
                                <div className="p-3 w-12 flex-shrink-0 text-right">{millisToMinutesAndSeconds(track.duration_ms)}</div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )

}

function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}