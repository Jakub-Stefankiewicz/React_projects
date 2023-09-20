import React from 'react';

const NumberInfo = ({number}) => {
    let isPrime=true;
    for(let i=2; i<=number/2; i++){
        if (number%2===0){
            isPrime=false;
            break;
        }
    }
    let pwd=true;
    if(Math.sqrt(number)%2!==0){
        pwd=false;
    }
    return (
        <div>
            <list>
                <ul key={number}>{number}</ul>
                {number%2===0 ? <ul>Parzysta</ul> : <ul>Nieparzysta</ul>}
                {isPrime && <ul>Liczba pierwsza</ul>}
                {pwd && <ul>Potęga dwójki</ul>}
            </list>
        </div>
    );
};

export default NumberInfo;