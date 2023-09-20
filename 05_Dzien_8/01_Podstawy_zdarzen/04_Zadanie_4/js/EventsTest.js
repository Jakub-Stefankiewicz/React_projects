import React from 'react';

const EventsTest = () => {
    return (
        <div onMouseEnter={() => console.log("najechano")}
             onMouseLeave={() => console.log("zjechano")}
             onClick={() => console.log("kliknięto")}
             style={{height: 100, width: 100, backgroundColor: "red"}}>
        </div>
    );
};

export default EventsTest;