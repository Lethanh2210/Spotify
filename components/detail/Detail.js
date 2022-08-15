import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import id from "faker/lib/locales/id_ID";
import Link from "next/link";

export default function Detail() {
    const typeBtn = ['albums','topTrack']
    const [token, setToken] = useState('');
    const [idArtist, setIdArtist] = useState('');
    const [album, setAlbum] = useState([]);
    const [artist, setArtist] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [type,setType] = useState('albums')

    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])

    useEffect(() => {
        const id = window.location.href.split('/')[4];
        setIdArtist(id)
    }, [idArtist])

    useEffect(async () => {
        setIsLoading(true)
        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${idArtist}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setArtist(data)
        setIsLoading(false)
    }, [idArtist])

    useEffect(async () => {
        const {data} = await axios.get(`https://api.spotify.com/v1/artists/${idArtist}/albums`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setAlbum(data.items)
    }, [idArtist])



    if (isLoading) return (
        <>
            <div role="status">
                <svg
                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
    return (
        <div>
            <div className="bg-black text-gray-300 min-h-screen detail p-10">

                <div className="flex">
                    <img className="mr-6 w-52 h-52" src={artist.name ? artist?.images[0]?.url : ""} alt=""/>
                    <div className="flex flex-col justify-center">
                        <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Artist</h4>
                        <h1 className="mt-0 mb-2 text-white text-4xl">{artist.name ? artist.name : "nothing"}</h1>

                        <p className="text-gray-600 mb-2 text-sm">With J. Cole, Quavo, Ty Dollar $ign</p>
                        <p className="text-gray-600 text-sm">Created by <a>Spotify</a> - 50 songs, 3 hr 2 min</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-between">
                    <div className="flex">
                        <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                        <button className="mr-2 border border-white block p-2 rounded-full">Top tracks
                        </button>
                        <button className="mr-2 border border-white block p-2 rounded-full">Albums</button>
                    </div>
                    <div className="text-gray-600 text-sm tracking-widest text-right">
                        <h5 className="mb-1">Followers</h5>
                        <p>{artist.name ? artist.followers.total : "nothing"}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex text-gray-600">
                        <div className="p-2 w-8 flex-shrink-0"/>
                        <div className="p-2 w-8 flex-shrink-0"/>
                        <div className="p-2 w-full">Title</div>
                        <div className="p-2 w-full">Artist</div>
                        <div className="p-2 w-full">Album</div>
                        <div className="p-2 w-12 flex-shrink-0 text-right">Tracks</div>
                    </div>
                    {album.map((alb, index) => {
                        return(
                            <Link passHref href={`/albums/${alb.id}`}>
                            <div key={index} className="flex border-b border-gray-800 hover:bg-gray-800">
                                <div className="p-3 w-8 flex-shrink-0">▶️</div>
                                <div className="p-3 w-8 flex-shrink-0">❤️</div>
                                <div className="p-3 w-full">{alb.name}</div>
                                <div className="p-3 w-full">{alb.artists[0].name}</div>
                                <div className="p-3 w-full">{alb.album_type}</div>
                                <div className="p-3 w-12 flex-shrink-0 text-right">{alb.total_tracks}</div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}