import React from "react";
import '../../app.css';

//LO USAMOS PARA MANEJAR EL COMPONENTE DETALLE DE PRODUCTO
export const ItemDetail = ({ data }) => {
    return (
        //CONTAINER = CONTAINERPROD
        //DETAIL = DETALLEPROD
        //DETAIL_IMAGE = DETALLEIMG 
        <div className="containerProd">
            <div className="detalleProd">
                <img className="detalleImg" src={data.imagen} alt={data.alt} />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p> {data.mensaje}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;