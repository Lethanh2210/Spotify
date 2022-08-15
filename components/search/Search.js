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
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let token = window.localStorage.getItem("token");
        setToken(token)
    }, [token])
    useEffect(async () => {
        setIsLoading(true)
        const {data} = await axios.get("https://api.spotify.com/v1/browse/categories?limit=48&offset=0", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        if(data.length > 0){

        }
        setCategories(data.categories.items)
        setIsLoading(false)
    }, [])

    const searchArtists = async (e) => {
        setIsLoading(true)
        setSearch(e.target.value)
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: search,
                type: "artist",
            }
        })
        setArtists(data.artists.items)
        setIsLoading(false)
    }

    const renderCategories = () => {
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
            <Grid key="categories" container mt={0} ml={-5}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <Link passHref href={`/genre/${category.id}`}>
                            <Grid  item xs={1.5} ml={5} mt={3}>

                                <div

                                    className="w-[150px] h-[160px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group "
                                >
                                    <img
                                        src={category.icons[0].url}
                                        alt="hello"
                                        className="h-120 w-120 absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"

                                    />
                                    <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5" >
                                        <div className="text-[20px]" >
                                            <h4 key="categoryName"
                                                className="font-extrabold truncate w-44">{category.name}
                                            </h4>
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
            <Grid key="artists" container mt={0} ml={-5}>
                {artists.map((artist, index) => (
                    <Link passHref href={`/detail/${artist.id}`} key={artist.id}>
                        <Grid  item xs={1.5} ml={5} mt={3} zeroMinWidth>
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




