import React from 'react';

const ClockTime = ({date}) => {
    return (
        <div>
            <h1>{date.toLocaleDateString()}</h1>
        </div>
    );
};

export default ClockTime;