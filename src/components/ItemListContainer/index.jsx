import React, { useEffect, useState } from "react";
import Title from '../Title';
import ItemList from '../ItemList';
import '../../../src/app.css';

//ACA CREAMOS EL LISTADO DE PRODUCTOS
const producto = [
  {
    id: 1,
    title: 'Producto 1',
    precio: '4900',
    category: 'hogar',
  },
  {
    userId: 1,
    id: 2,
    title: 'Producto 2',
    precio: '5900',
    category: 'cocina',
  },
  {
    userId: 1,
    id: 3,
    title: 'Producto 3',
    precio: '6900',
    category: 'figuras',
  },
  {
    userId: 1,
    id: 4,
    title: 'Producto 6',
    precio: '7900',
    category: 'jardin',
  },
];

//ACA COMO CONTAINER, MANEJA TODA LA LOGICA
const ItemListContainer = ({texto}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listaProd = new Promise((resolve) => {
      setTimeout(() => {
        resolve(producto);
      }, 3000);
    });

    listaProd.then((res) => {
      setList(res);
    });
  }, []);


    return (
      <div>
      <Title greeting={texto}/>
      <ItemList listadoTotal={list} />
      </div>
  );
}

export default ItemListContainer;



