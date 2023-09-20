import React, {useState} from 'react';

const Box = () => {
    const[style, updateStyle]=useState({
        backgroundColor:"green",
        width:"500px",
        height:"200px"
    })
    const handleClick= (width, height, color) => {
        updateStyle({
            ...style,
            backgroundColor:color,
            width:width,
            height:height
        })
    }

    return (
        <div style={style}>
            <button onClick={() => handleClick(200, 300, "orange")} >200 i 300, pomarancz</button>
            <button onClick={() => handleClick(100, 700, "blue")}>100 i 700, niebieski</button>
            <button onClick={() => handleClick(500, 200, "green")}>500 i 200, zielony</button>
        </div>
    );
};

export default Box;