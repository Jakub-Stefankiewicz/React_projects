import React, {useEffect, useState} from 'react';

const Box = () => {
    const [color, setColor] = useState("cornflowerblue");

    useEffect(() => {
        const interval = setInterval(()=>{
            setColor("tomato")
        }, 2000)
    }, []);

    return (
        <div style={{width: "100px", height: "100px", backgroundColor: color}}>

        </div>
    );
};

export default Box;