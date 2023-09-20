import React, {useEffect, useState} from 'react';

const AnotherColor = () => {
    const[color, setColor]=useState("yellow");

    useEffect(() => {
        const interval = setInterval(()=>{
            setColor("blue");
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div style={{backgroundColor:color, width:"100px", height:"100px"}}>
        </div>
    );
};

export default AnotherColor;