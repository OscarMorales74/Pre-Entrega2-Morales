import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const producto = {
      id: 1,
      title: 'Producto 2',
      imagen: '../../../imgProd/img1.jpg',
      mensaje: 'estoy en itemDetailContainer',
      precio: '4900',
      category: 'hogar',
      alt: 'Producto 2'
    };

//DATA = LISTA
//SETDATA = SETLISTA 
export const ItemDetailContainer = ({ }) => {
    const [lista, setLista] = useState({});

    useEffect(() => {
        //LISTAPROD = GETDATA
        const listaProd = new Promise(resolve => {
            setTimeout(() => {
                //PRODUCTO= FILM
                resolve(producto);
            }, 3000);
        });
        listaProd.then(res => setLista(res));
    }, [])


    return (
        //LISTA = DATA
        <div>
            <ItemDetail data={lista} />
        </div>
    );
}

export default ItemDetailContainer;