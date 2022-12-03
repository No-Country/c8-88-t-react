import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logos/logo travelpack.png";
import "./Nav.css"

export const Nav = () => {

    //variables para manejar el btn-hamburguer
    const [active, setActive] = useState(false);

    //función que activará el btn-hamburguer
    const isActive = () => {
        setActive(!active);
    }

    return (<>
        <nav className="navbar navbar-expand-lg d-flex justify-content-lg-around justify-content-between px-1 px-lg-0" >
            <Link  className="navbar-brand logo_menu" to="/">
                <img src={logo} alt="Logotipo de TravelPack" />
            </Link>

            <button onClick={()=> isActive()} className= {`navbar-toggler hamburger hamburger--spring ${active ? "is-active" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
            </button>
            <div className="collapse navbar-collapse wrapper_enlaces" id="navbarNavAltMarkup">
                <div className="navbar-nav d-lg-flex justify-content-lg-evenly fw-500">
                    <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                    <Link className="nav-link" to={"/envios"} >Envíos</Link>
                    <Link className="nav-link" to={"/seguimiento"} >Seguimiento</Link>
                    <ul className="nav-item dropdown">
                        <ul className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cuenta
                            <li className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to={"/perfil"} >Mi perfil</Link>
                            </li>
                        </ul>
                    </ul>
                    
                </div>
                <div className="usuario_navbar w-100 w-md-25 text-star text-md-end pe-md-5">
                <Link className="nav-link" to={"/auth"} >Iniciar sesión</Link>
                </div>
            </div>
        </nav>
    </>)
}
