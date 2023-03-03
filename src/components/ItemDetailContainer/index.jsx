import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const producto = {
      id: 1,
      title: 'Producto 1',
      precio: '4900',
      category: 'hogar',
    };

export const ItemDetailContainer = () => {
    const [list, setList] = useState({});

    useEffect(() => {
        //LISTAPROD = GETDATA
        const listaProd = new Promise((resolve) => {
            setTimeout(() => {
                //PRODUCTO= FILM
                resolve(producto);
            }, 3000);
        });
        listaProd.then(res => setList(res));
    }, [])


    return (
        //LIST = DATA
        <ItemDetail data={list} />
    );
}

export default ItemDetailContainer;