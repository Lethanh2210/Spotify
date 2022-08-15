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
import {Songs} from "./Context";
import {tableRowClasses} from "@mui/material/TableRow";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { red } from '@mui/material/colors';
import {AudioSong} from "../Context";

// import "../../styles/playList.css"

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
    const {DataSongs, handleSetSong, currentList,song} = useContext(AudioSong);
    const [textColor, setTextColor] = useState("black");


    const handlePlaySong = (idSong) => {
        handleSetSong(idSong);
        setSong(idSong);
        setTextColor("blue");
    }

    return (
        <div className="">
            <TableContainer component={Paper} sx={{
                height: 585,
                "&::-webkit-scrollbar": {
                    width: 5
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "black"
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "green",
                    borderRadius: 2
                }
            }}>
                <Table stickyHeader  sx={{
                    height: "90vh",
                    backgroundColor: "black",
                    color: "white",
                    minWidth: 650,


                }} aria-label="customized table" className="playList">
                    <TableHead>
                        <TableRow className="custom-th">
                            <StyledTableCell align="center">#</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="center">Author</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentList.map((row, index) => (
                            <StyledTableRow hover variant="body"  key={index} onClick={() => handlePlaySong(row.id)}
                                            selected={song1 === row.id}
                                            style={{color: song[0].id === row.id ? "teal" : "gray"}}
                                            className={classes.StyledTableRow}

                            >
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.author}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

PlayList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayList);

