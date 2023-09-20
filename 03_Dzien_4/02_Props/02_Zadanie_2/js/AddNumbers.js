import React from 'react';

const AddNumbers = ({numberA, numberB}) => {
    return (
        <div>
            <h2>
                {numberA + numberB}
            </h2>
        </div>
    );
};

export default AddNumbers;