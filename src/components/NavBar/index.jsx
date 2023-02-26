import React from "react";
import IconoCarrito from "../IconoCarrito";
import Logo from "../Logo/logo.png";
import "../../../src/app.css"

const NavBar = () => {
    return (
        <div className="encabezado">
            <nav className="nav">
                <div className="navLogo">
                    <img src={Logo} alt="logo"/>
                </div>
                    <div>
                        <a className="icoCarrito" href="#">
                            <IconoCarrito />
                        </a>
                    </div>
                    <span className="contadorCarrito">2</span>
                <ul className="navLista">
                    <li>
                        <a className="linkBoton" href="#">INICIO</a>
                    </li>
                    <li>
                        <a className="linkBoton" href="#">NOSOTROS</a>
                    </li>
                    <li>
                        <a className="linkBoton" href="#">PRODUCTOS</a>
                    </li>
                    <li>
                        <a className="linkBoton" href="#">TRABAJOS</a>
                    </li>
                    <li>
                        <a className="linkBoton" href="#">CONTACTO</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;