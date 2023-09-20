import React, {Component} from 'react';

const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(el => {
                return <li key={el.url}><a href={el.url}>{el.text}</a></li>
            })}
        </ul>
    );
};

export default Menu;

