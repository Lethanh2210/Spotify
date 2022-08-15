import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {Songs} from "../../playlistHome/Context";
import {Location} from "../../Context";
import Link from "next/link";



function CardLocation(props){

    const {handleSetLocationSong, locationSong, setImageLocation } = useContext(Location);
    const handleClick = (location, image) => {
        handleSetLocationSong(location.name);
        setImageLocation(image);
    }

    return (
        <Link passHref href={`/playlist/location/${props.location.name}`}>
            <CCard style={{ width: '165px', backgroundColor: '#171717', padding: "10px", color: "white" , height: '260px', borderRadius: "3%" }} className="musicCard" onClick={()=> handleClick(props.location, props.location.image)}>
                <CCardImage orientation="top" src={props.location.image} style={{borderRadius: '50%', width: "160px", height: "160px"}}/>
                <CCardText style={{marginTop : '15px'}}>
                    {props.location.name}
                </CCardText >
                <CCardBody style={{color: '#9c9c9c', marginTop: '-20px', marginLeft: "-15px"}}>
                    Location
                </CCardBody>
            </CCard>
        </Link>


    )
}

export default CardLocation;