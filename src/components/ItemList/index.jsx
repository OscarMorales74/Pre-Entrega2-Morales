import React from 'react';
import Item from '../Item/Item'

//LE PASO COMO PARAMETRO EL ELEMENTO LISTADOTOTAL CREADO EN ITEMLISTCONTAINER
const ItemList = ({ listadoTotal }) => {
  return (
    //CREAMOS UN DIV CON UN MAP A LISTADO TOTAL
    //CREAMOS UN PARAMETRO QUE PEDIRA ID Y TITULO A LISTADOTOTAL
    //SE CREARA CON LI, UN ARRAY DE ORJETOS TOTAL
    listadoTotal.map(producto => <Item key={producto.id} info={producto} />)
    );
}

export default ItemList;
