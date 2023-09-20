import React from 'react';

const ReceiptFooter = ({sum}) => {
    return (
        <tr>
            <td>RAZEM</td>
            <td>-</td>
            <td>-</td>
            <td>{sum.toFixed(2)}</td>
        </tr>
    );
};

export default ReceiptFooter;