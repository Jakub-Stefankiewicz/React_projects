import React from 'react';

const CurrencyConverter = ({from, to, value, rate}) => {
    return (
        <div>
            <stong>{value}</stong> {from} => <strong> {value * rate}</strong> <strong>{to}</strong>
        </div>
    );
};

export default CurrencyConverter;