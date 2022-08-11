import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {Songs} from "../../playlistHome/Context";


function Card(props){
    const [authorSong, setAuthorSong] = useState([]);
    const {DataSongs, handleSetSong} = useContext(Songs);

    const handleClick = (author) => {
        const song = DataSongs.filter(song => song.author === author.name);
        setAuthorSong(song);
        console.log(authorSong)
    }

    return (
        <CCard style={{ width: '165px', backgroundColor: '#171717', padding: "10px", color: "white" , height: '243px', borderRadius: "3%" }} className="musicCard" onClick={()=> handleClick(props.author)}>
            <CCardImage orientation="top" src={props.author.image} style={{borderRadius: '50%'}}/>
            <CCardText style={{marginTop : '15px'}}>
                {props.author.name}
            </CCardText >
            <CCardBody style={{color: '#9c9c9c', marginTop: '-20px', marginLeft: "-15px"}}>
                    Artist
            </CCardBody>
        </CCard>
    )
}

export default Card;