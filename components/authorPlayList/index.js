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
                    <h1 style={{color: "White"}}>Artist: {authorSong[0].author}</h1>
                    <PlayListAuthor/>
                </DashboardContent>
            </div>
    );
}

export default AuthorPlayList;