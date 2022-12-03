import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return (<>
        <div className="wrapper_footer">
            <footer className="footer mx-auto d-flex w-100 flex-column flex-lg-row">

                <div className="d-flex justify-content-evenly flex-column order-2 order-lg-1">

                    <div className="footer_rrss">
                        <ul className="d-flex  justify-content-evenly">
                            <li><a href="https://www.facebook.com" target="blank"><i className="bi bi-facebook fs-6"></i></a></li>
                            <li><a href="https://www.instagram.com" target="blank"><i className="bi bi-instagram fs-6" ></i></a></li>
                            <li><a href="https://www.twitter.com" target="blank"><i className="bi bi-twitter fs-6"></i></a></li>
                        </ul>
                    </div>


                    <div className="d-flex w-100 wrapper_autores flex-column gap-2 " >

                        <div className="d-flex  justify-content-evenly flex-column flex-lg-row mx-auto" >
                            <p className="d-flex justify-content-start ps-2" >Desarrollado por:</p>
                            <div className="autores d-flex justify-content-start   ">
                                <a href="https://www.linkedin.com/in/tomas-paoletti-velado/" target="blank">Tomas Paoletti</a>
                                <a href="https://www.linkedin.com/in/jose-martin-miño-b3956523a/" target="blank">Jose Martin Miño</a>
                                <a href="https://www.linkedin.com/in/gabriel-castillo-frontend/" target="blank">Gabriel Castillo</a>
                            </div>
                        </div>

                        <div className="d-flex  justify-content-evenly flex-column flex-lg-row mx-auto">
                            <p className="d-flex justify-content-start ps-2">Diseñado por:</p>
                            <div className="autores d-flex justify-content-start   ">
                                <a href="https://www.linkedin.com/in/yanina-calviello-81b33a215/" target="blank">Yanina Calviello</a>
                                <a href="https://www.linkedin.com/in/anthonella-rua-7b1b351b8/" target="blank">Anthonella Rua</a>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="footer_enlaces order-1 order-lg-2">
                        <ul className="d-flex  justify-content-evenly" >
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/envios">Envíos</Link> </li>
                            <li> <Link to="/seguimiento">Seguimiento</Link> </li>
                            <li> <Link to="/cuenta">Cuenta</Link> </li>
                        </ul>
                </div>

                {/* <div className="copyright mx-auto">
                    <p className="mx-auto">© 2022 TravelPack, todos los derechos reservados.</p>
                    
                </div> */}
            </footer>
            
        </div>
    </>)
}