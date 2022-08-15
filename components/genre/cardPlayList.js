import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import {useEffect, useState} from "react";
import {useContext} from "react";

import Link from "next/link";



function CardPlayList(props){

    return (
        <Link passHref href={`/playlist/${props.id}`}>
            <CCard style={{ width: '165px', backgroundColor: '#171717', padding: "10px", color: "white" , height: '260px', borderRadius: "3%" }} className="musicCard">
                <CCardImage orientation="top" src={props.image} style={{borderRadius: '50%', width: "160px", height: "160px"}}/>
                <CCardText style={{marginTop : '15px'}}>
                    {props.name}
                </CCardText >
                <CCardBody style={{color: '#9c9c9c', marginTop: '-20px', marginLeft: "-15px"}}>
                    Album
                </CCardBody>
            </CCard>
        </Link>
    )
}

export default CardPlayList;