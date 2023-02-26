import React from "react";
import Title from '../Title';
import '../../../src/app.css';

//A TITLE LE PASAMOS UNA PROP
export const ItemListContainer = ({ texto}) => {
    return (
        <Title greeting={texto}/>
    );
}

export default ItemListContainer;