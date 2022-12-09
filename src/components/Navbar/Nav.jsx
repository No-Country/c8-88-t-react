import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logos/logo travelpack.png";
import "./Nav.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Nav = () => {

    const [active, setActive] = useState(false);
    const state = useSelector((state) => state.user)
    const navigate = useNavigate()

    const isActive = () => {
        setActive(!active);
    }

    const handleClick = () => {
        navigate('/auth');
    }

    const isConect = state.isAuthenticated ? state.fullName : "Iniciar sesión"

    return (<>
        <nav className="navbar navbar-expand-lg d-flex justify-content-lg-around justify-content-between px-1 px-lg-0" >
            <Link className="navbar-brand logo_menu" to="/">
                <img src={logo} alt="Logotipo de TravelPack" />
            </Link>
            <button onClick={() => isActive()} className={`navbar-toggler hamburger hamburger--spring ${active ? "is-active" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className="collapse navbar-collapse wrapper_enlaces" id="navbarNavAltMarkup">
                <div className="navbar-nav d-lg-flex justify-content-lg-evenly fw-500">
                    <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                    <Link className="nav-link" to={"/Envios"} >Envíos</Link>
                    <Link className="nav-link" to={"/seguimiento"} >Seguimiento</Link>
                </div>
                <div className="usuario_navbar w-100 w-md-25 text-start text-lg-end pe-md-5" >
                    <p className="nav-link" style={{ cursor: 'pointer' }} onClick={handleClick} id="log-in"> {isConect}</p>
                </div>
            </div>
        </nav>
    </>)
}


