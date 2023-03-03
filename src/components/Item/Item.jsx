import React from "react";
import '../../../src/app.css';

const Item = ({ info }) => {
    return (
        <a href="" className="prod">
            <img src={info.image} alt='' />
            <p>{info.title}</p>
        </a>
    );
}

export default Item;