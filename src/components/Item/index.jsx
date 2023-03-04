import React from 'react';
import '../../app.css';

//INFO = INFOPROD ESTA EN ITEMLIST
const Item = ({ infoProd }) => {
    return (
        <a href='' className="prod">
            <img className='prodImg' src={infoProd.imagen} alt={infoProd.alt} />
            <h3>{infoProd.title}</h3>
        </a>
    );
}

export default Item;