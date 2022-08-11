import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {Songs} from "../../playlistHome/Context";
import {AuthorSong} from "../../Context";
import Link from "next/link";



function Card(props){

    const {handleSetAuthorSong, authorSong } = useContext(AuthorSong);
    const handleClick = (author) => {
        handleSetAuthorSong(author.name);
    }

    return (
        <Link passHref href={`/playlist/author/${props.author.name}`}>
        <CCard style={{ width: '165px', backgroundColor: '#171717', padding: "10px", color: "white" , height: '260px', borderRadius: "3%" }} className="musicCard" onClick={()=> handleClick(props.author)}>
            <CCardImage orientation="top" src={props.author.image} style={{borderRadius: '50%', width: "160px", height: "160px"}}/>
            <CCardText style={{marginTop : '15px'}}>
                {props.author.name}
            </CCardText >
            <CCardBody style={{color: '#9c9c9c', marginTop: '-20px', marginLeft: "-15px"}}>
                    Artist
            </CCardBody>
        </CCard>
            </Link>
    )
}

export default Card;