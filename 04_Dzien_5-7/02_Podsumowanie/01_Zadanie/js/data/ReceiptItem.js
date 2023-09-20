import React from 'react';


const ReceiptItem = ({item}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.single_price}</td>
            <td>{item.qty}</td>
            <td>{(item.single_price * item.qty).toFixed(2)}</td>
        </tr>
    );
};

export default ReceiptItem;