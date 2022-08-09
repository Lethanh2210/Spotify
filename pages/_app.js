import '../styles/globals.css'
import '../styles/Dashboard.css'
import '../styles/playList.css';
import Login from "../components/Login/Login";
import {SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react";

export default function MyApp({Component, pageProps: {session, ...pageProps},}) {
    const [token,setToken] = useState('')
    console.log(token)
    useEffect(()=>{
        const token =  window.localStorage.getItem('token');
        setToken(token)
    })
    return (
        <SessionProvider session={session}>
            {token ? <Component {...pageProps} /> : <Login/> }
        </SessionProvider>
    )
}


