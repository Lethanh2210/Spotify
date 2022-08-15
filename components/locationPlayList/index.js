import {useState} from "react";
import DashboardContent from "../utils/DashboardContent";
import PlayListLocation from "./playListLocation";
import {useContext} from "react";
import {Location} from "../Context";



function LocationPlayList() {
    const {locationSong, imageLocation} = useContext(Location);


    return (
        <div>
            <DashboardContent>
                <div style={{display: 'flex'}}>
                    <img src={imageLocation} alt="11" width="40%" style={{height: "300px"}}/>
                    <h1 style={{color: "White", display: "flex", justifyContent: "center", alignItems: "end"}}>Location: {locationSong[0].location}</h1>
                </div>
                <PlayListLocation/>
            </DashboardContent>
        </div>
    );
}

export default LocationPlayList;