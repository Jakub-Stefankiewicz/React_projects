import React, {useState} from 'react';

const CrazyDiv = () => {
    const [style, updateStyle] = useState(
        {
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: 0,
            top: 0
        }
    );
    const handleHover = (min, max) => {
        updateStyle({
            ...style,
            left: Math.floor(Math.random()*(max-min)+min),
            top: Math.floor(Math.random()*(max-min)+min)
        })
    }
    return (
        <div style={style} onMouseEnter={()=>handleHover(0,1000)}>
        </div>
    );
};

export default CrazyDiv;