import React from 'react';

const ClockDate = ({date}) => {
    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
};

export default ClockDate;