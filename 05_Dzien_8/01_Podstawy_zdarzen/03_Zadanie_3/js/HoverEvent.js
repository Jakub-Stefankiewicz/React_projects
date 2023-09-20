import React from 'react';

const HoverEvent = () => {
    return (
        <div>
            <button onMouseEnter={ () => console.log("najechano") }>Klik</button>
        </div>
    );
};

export default HoverEvent;