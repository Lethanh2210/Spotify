import '../styles/globals.css'
import '../styles/Dashboard.css'
import '../styles/playList.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-h5-audio-player/lib/styles.css';

import {SessionProvider} from "next-auth/react"

export default function MyApp({Component, pageProps: {session, ...pageProps},}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}


