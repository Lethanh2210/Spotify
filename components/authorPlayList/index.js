import {useState} from "react";
import DashboardContent from "../utils/DashboardContent";
import PlayListAuthor from "./playListAuthor";
import {useContext} from "react";
import {AuthorSong} from "../Context";



function AuthorPlayList() {
    const {authorSong} = useContext(AuthorSong);

    return (
            <div>
                <DashboardContent>
                    <div style={{display: 'flex'}}>
                        <img src={authorSong[0].links.images[0].url} alt="11" width="40%" style={{height: "300px"}}/>
                        <h1 style={{color: "White", display: "flex", justifyContent: "center", alignItems: "end"}}>Artist: {authorSong[0].author}</h1>
                    </div>
                    <PlayListAuthor/>
                </DashboardContent>
            </div>
    );
}

export default AuthorPlayList;