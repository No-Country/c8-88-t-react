import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return (<>
        <div className="wrapper_footer">
            <footer className="footer mx-auto">

                <div className="d-flex w-100  justify-content-evenly">

                    <div className="footer_rrss w-25">
                        <ul className="d-flex  justify-content-evenly">
                            <li><a href="https://www.facebook.com" target="blank"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com" target="blank"><i class="bi bi-instagram" ></i></a></li>
                            <li><a href="https://www.twitter.com" target="blank"><i class="bi bi-twitter"></i></a></li>
                        </ul>
                    </div>

                    <div className="footer_enlaces w-50">
                        <ul className="d-flex justify-content-evenly" >
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/envios">Envíos</Link> </li>
                            <li> <Link to="/seguimiento">Seguimiento</Link> </li>
                            <li> <Link to="/cuenta">Cuenta</Link> </li>
                        </ul>
                    </div>

                </div>

                <div className="copyright mx-auto">
                    <p className="mx-auto">© 2022 TravelPack, todos los derechos reservados.</p>
                    <div className="d-flex w-100 wrapper_autores justify-content-evenly" >
                        <div>
                            <p>Diseñado por:</p>
                            <div className="autores d-flex justify-content-between">
                                <a href="https://www.linkedin.com/in/yanina-calviello-81b33a215/" target="blank">Yanina Calviello</a>
                                <a href="https://www.linkedin.com/in/anthonella-rua-7b1b351b8/" target="blank">Anthonella Rua</a>
                            </div>
                        </div>
                        <div>
                            <p>Desarrollado por:</p>
                            <div className="autores d-flex justify-content-between">
                                <a href="https://www.linkedin.com/in/tomas-paoletti-velado/" target="blank">Tomas Paoletti</a>
                                <a href="https://www.linkedin.com/in/jose-martin-miño-b3956523a/" target="blank">Jose Martin Miño</a>
                                <a href="https://www.linkedin.com/in/gabriel-castillo-frontend/" target="blank">Gabriel Castillo</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
            
        </div>
    </>)
}