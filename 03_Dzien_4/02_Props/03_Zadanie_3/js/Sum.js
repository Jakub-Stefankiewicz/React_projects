import React from 'react';

const Sum = ({arr}) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const result = arr.reduce(reducer, 0)
    console.log(result)
    return (
        <div>
            <h1> {result} </h1>
        </div>
    );
};

export default Sum;