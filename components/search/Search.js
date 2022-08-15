import {useEffect, useState} from "react";
import axios from "axios";
import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {Grid} from "@mui/material";
import Link from "next/link";

export default function Search() {
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');
    const [artists, setArtists] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])
    useEffect(async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/categories?limit=48&offset=0", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        console.log(categories,'======')
        setCategories(data.categories.items)
    }, [])

    const searchArtists = async (e) => {
        setSearch(e.target.value)
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: search,
                type: "track,artist",
            }
        })
        console.log(data)
        setArtists(data.artists.items)
    }

    const renderCategories = () => {
        return (
            <Grid key="categories" container mt={0} ml={-5}>
                {categories.map((category, index) => (
                    <div key={index}>
                        <Link passHref href={`/genre/${category.id}`}>
                            <Grid key={index} item xs={1.5} ml={5} mt={3}>

                                <div
                                    key={index}
                                    className="w-[150px] h-[160px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group "
                                >
                                    <img
                                        src={category.icons[0].url}
                                        alt="hello"
                                        className="h-120 w-120 absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
                                        <div className="text-[20px]">
                                            <h4 key="categoryName"
                                                className="font-extrabold truncate w-44">{category.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Link>
                    </div>
                ))
                }
            </Grid>)
    }
    const renderArtists = () => {
        return (
            <Grid key="artists" container mt={0} ml={-5}>
                {artists.map((artist, index) => (
                    <Link passHref href={`/detail/${artist.id}`}>
                        <Grid key={index} item xs={1.5} ml={5} mt={3} zeroMinWidth>
                            <CCard style={{
                                width: '165px',
                                cursor: 'pointer',
                                backgroundColor: '#171717',
                                padding: "10px",
                                color: "white",
                                height: '260px',
                                borderRadius: "5%"
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
                                    {artist.type.charAt(0).toUpperCase() + artist.type.slice(1)}
                                </CCardBody>
                            </CCard>
                        </Grid>
                    </Link>))}
            </Grid>
        )

    }

    return (
        <div>
            <form className="mb-20">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 pr-2 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           onChange={searchArtists}
                           className="block  pl-7 h-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Artists or songs"/>
                </div>
            </form>
            {search === "" ? <h1 className="text-white">Categories</h1> : <h1 className="text-white">Artists</h1>}
            <hr className="text-white"/>
            {search === "" ? renderCategories() : renderArtists()}
        </div>
    )
}




