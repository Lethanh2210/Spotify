import {CCard, CCardBody, CCardImage, CCardText} from "@coreui/react";
import demo from "../../public/Spotify.png"

function Card(props){
    return (
        <CCard style={{ width: '165px', backgroundColor: '#171717', padding: "10px", color: "white" , height: '243px' }}>
            <CCardImage orientation="top" src={props.author.image} style={{borderRadius: '50%'}}/>
            <CCardText>
            </CCardText >
            <br/>
            <CCardBody>
                {props.author.name}
            </CCardBody>
        </CCard>
    )
}

export default Card;