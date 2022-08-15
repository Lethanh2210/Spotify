import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {AudioSong, AuthorSong} from "../Context";







const styles = (theme) => ({
    StyledTableRow: {
        "&.Mui-selected, &.Mui-selected:hover": {
            "& > .MuiTableCell-root": {
                color: "teal"
            }
        }
    }
});



function PlayListId(props) {
    const [song1, setSong] = useState();
    const {handleSetSong, setCurrentList} = useContext(AudioSong);
    const {authorSong} = useContext(AuthorSong);
    const {DataSongs} = useContext(AudioSong);

    useEffect(() =>{
        setCurrentList(authorSong)
    })

    const handlePlaySong = (idSong) => {
        handleSetSong(idSong);
        setSong(idSong);
    }

    return (
        <div className="bg-black text-gray-300 h-90 p-10 ">
            <div className="flex">
                <img className="mr-6 h-60" src={authorSong[0].links.images[0].url}/>
                <div className="flex flex-col justify-center">

                    <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
                    <h1 className="mt-0 mb-2 text-white text-4xl">Artist: {authorSong[0].author}</h1>
                    <p className="text-gray-600 mb-2 text-sm"></p>
                    <p className="text-gray-600 text-sm">Created by <a>LT2K</a></p>
                </div>
            </div>
            <div className="mt-6 flex justify-between">
                <div className="flex">
                    <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full" onClick={() => handlePlaySong(authorSong[0].id)}>Play</button>
                </div>
                <div className="text-gray-600 text-sm tracking-widest text-right">
                    <h5 className="mb-1">Followers</h5>
                    <p>5,055</p>
                </div>
            </div>

            <div className="mt-10">

                <div className="flex text-gray-600">
                    <div className="p-2 w-8 flex-shrink-0"></div>
                    <div className="p-2 w-8 flex-shrink-0"></div>
                    <div className="p-2 w-full">Title</div>
                    <div className="p-2 w-full">Artist</div>
                    <div className="p-2 w-full">Album</div>
                    <div className="p-2 w-12 flex-shrink-0 text-right">:stopwatch:</div>
                </div>
                {authorSong.map((row, index) => (
                    <div className="flex border-b border-gray-800 hover:bg-gray-800" key={index} onClick={() => handlePlaySong(row.id)}>
                        <div className="p-3 w-8 flex-shrink-0"></div>
                        <div className="p-3 w-8 flex-shrink-0"></div>
                        <div className="p-3 w-full">{row.name}</div>
                        <div className="p-3 w-full">{row.author}</div>
                        <div className="p-3 w-full">Spotify</div>
                        <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
                    </div>
                ))}


            </div>
        </div>

    );
}

PlayListId.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayListId);

