import React from "react";
import '../../../src/app.css';

export const ItemDetail = ({ list }) => {
    return (
        //CONTAINER = CONTAINERPROD
        //DETAIL = DETALLEPROD
        //DETAIL_IMAGE = DETALLEIMG 
        <div className="containerProd">
            <div className="detalleProd">
                <img className="detalleImg"/>
                <div className="content">
                    <h1>{list.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;