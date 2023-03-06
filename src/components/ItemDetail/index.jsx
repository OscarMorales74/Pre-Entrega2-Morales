import React from "react";
import Item from "../Item";
import '../../app.css';

//LO USAMOS PARA MANEJAR EL COMPONENTE DETALLE DE PRODUCTO
export const ItemDetail = ({ lista }) => {
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
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;