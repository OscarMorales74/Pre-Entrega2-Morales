import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import '../../app.css';

//LO USAMOS PARA MANEJAR EL COMPONENTE DETALLE DE PRODUCTO
export const ItemDetail = ({ lista }) => {

    const [goToCart, setGoToCart] = useState(false);

     //ACA SE DECLARA ONADD ,QUE SERA LLAMADO EN ITEMCOUNT
  const onAdd = (quantity) => {
    setGoToCart(true);
  }
  
    return (
        //CONTAINER = CONTAINERPROD
        //DETAIL = DETALLEPROD
        //DETAIL_IMAGE = DETALLEIMG 
        <div className="containerProd">
            <div className="detalleProd">
                <img className="detalleImg" src={lista.imagen} alt={lista.alt} />
                <div className="content">
                    <h1>{lista.title}</h1>
                    <p> {lista.mensaje}</p>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;