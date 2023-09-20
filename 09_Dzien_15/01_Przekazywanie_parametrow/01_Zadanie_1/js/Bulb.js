import React, {useState} from 'react';

const Bulb = () => {
    const [light, setLight]= useState(false);
    const clickHandler = (e) => {
        console.log(e);
        setLight(prev => !prev)
    }
    return (
        <div
        style={{
            width: "100px",
            height: "100px",
            backgroundColor: light ? "yellow" : "white"
        }}
        onClick={(event) => {
            clickHandler(event)
        }}
        >
            <p>{light ? "Off" : "On"}</p>
        </div>
    );
};

export default Bulb;