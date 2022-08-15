import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext, useEffect, useState} from "react";
import {tableRowClasses} from "@mui/material/TableRow";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {AudioSong, AuthorSong} from "../Context";
import {Songs} from "../playlistHome/Context";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        borderColor: "gray"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: "gray",
        border: "none"
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.body}`]: {
        fontSize: 14,
        '&:hover': {
            backgroundColor: 'gray',
        },
        border: "none"
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    },
}));

const styles = (theme) => ({
    StyledTableRow: {
        "&.Mui-selected, &.Mui-selected:hover": {
            "& > .MuiTableCell-root": {
                color: "teal"
            }
        }
    }
});



function PlayList(props) {
    const { classes } = props;
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
                <img className="mr-6 h-60" src={DataSongs[0].links.images[0].url}/>
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
                    // <StyledTableRow hover variant="body"  key={index} onClick={() => handlePlaySong(row.id)}
                    //                 selected={song1 === row.id}
                    //                 className={classes.StyledTableRow}
                    //
                    // >
                    //     <StyledTableCell align="center">{index + 1}</StyledTableCell>
                    //     <StyledTableCell align="left">{row.name}</StyledTableCell>
                    //     <StyledTableCell align="center">{row.author}</StyledTableCell>
                    // </StyledTableRow>
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

PlayList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayList);

