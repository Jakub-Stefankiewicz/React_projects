import React, {useEffect, useState} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

const Clock = () => {
    const[date, setDate]=useState(new Date());

    useEffect(() => {
        const interval=setInterval(()=>{
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [date]);


    return (
        <div>
            <ClockDate date={date}/>
            <ClockTime date={date}/>
        </div>
    );
};

export default Clock;