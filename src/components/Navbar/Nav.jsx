import { Link } from "react-router-dom";
import { useState } from "react";

export const Nav = () => {

    //variables para manejar el btn-hamburguer
    const [active, setActive] = useState(false);

    //función que activará el btn-hamburguer
    const isActive = () => {
        setActive(!active);
    }

    return (<>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg" >
            <Link  className="navbar-brand" to="/">
                <img src="https://www.designevo.com/res/templates/thumb_small/purple-earth-and-white-airplane.webp" alt="Logotipo" />
            </Link>

            <button onClick={()=> isActive()} className= {`navbar-toggler hamburger hamburger--spring ${active ? "is-active" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                    <Link className="nav-link" to={"/envios"} >Envíos</Link>
                    <Link className="nav-link" to={"/seguimiento"} >Seguimiento</Link>
                    <Link className="nav-link" to={"/cuenta"} >Cuenta</Link>
                </div>
            </div>

        </nav>
    </>)
}
