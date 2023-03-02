import React, { useEffect, useState } from "react";
import Title from '../Title';
import '../../../src/app.css';

import ItemList from './ItemList';

const productos = [
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
    title: 'Producto 4',
    precio: '7900',
    category: 'jardin',
  },
];

const ItemListContainer = ({texto}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });

    promise.then((res) => {
      setList(res);
    });
  }, []);


    return (
      <div>
      <Title greeting={texto}/>
      <ItemList todos={list} />
      </div>
  );
}

export default ItemListContainer;




//A TITLE LE PASAMOS UNA PROP
// export const ItemListContainer = ({ texto}) => {
//     return (
//         <Title greeting={texto}/>
//     );
// }

// export default ItemListContainer;