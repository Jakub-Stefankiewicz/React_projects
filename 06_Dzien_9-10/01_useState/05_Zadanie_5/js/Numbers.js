import React, {useState} from 'react';

const Numbers = () => {
    const initialNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40, 1, 3, 5]
    const [numbers, setNumbers] = useState(initialNumbers);
    const showEven = () => {
        setNumbers(numbers.filter(number => number % 2 === 0));
    }
    const showAll = () => {
        setNumbers(initialNumbers)
    }
    const showOdd = () => setNumbers(numbers.filter(number => number % 2 !== 0))
    return (
        <div>
            <list>
                {numbers.map((number, index) => {
                    return <ul key={index}>{number}</ul>
                })}
            </list>
            <button onClick={showEven}>Show even</button>
            <button onClick={showAll}>Show all</button>
            <button onClick={showOdd}>Show odd</button>
        </div>
    );
};

export default Numbers;