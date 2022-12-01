import login from "../../../assets/login/login.png";
import {singFacebook, singGoogle} from '../../../db/index';
import {useNavigate} from 'react-router-dom';
import "./Auth.css";

export const Auth = () => {

    const navigate = useNavigate();

    const handleFacebook = () => {
        singFacebook();
        navigate("/cuenta");
    };

    const handleGoogle = () => {
        singGoogle();
        navigate("/cuenta");
    };

    const handleLogin = () => navigate("/login");

    const handleEmail = () => alert("Registro con email en proceso...");

    return (<>
        <div className="w-100" >
            <div className="wrapper_auth mx-auto  d-flex  flex-column flex-lg-row mb-5 mb-xl-0">

                <div className="wrapper_auth_info d-flex flex-column justify-content-center gap-5 align-items-center">
                    <p className="h5 mx-auto text-center m-0">Realiza envíos al exterior mediante viajeros</p>
                    <img  className="mx-auto" src={login} alt="Envía un paquete" />
                </div>

                <div className="d-flex flex-column justify-content-center gap-5 align-items-center">
                    <span></span>

                    <div className="wrapper_btn d-flex flex-column justify-content-between">
                        <button 
                            className="btn-login w-100 d-flex gap-4 justify-content-start align-items-center ps-5" 
                            onClick={handleFacebook}>
                            <i class="bi bi-facebook"></i>
                            Ingresar con Facebook
                        </button>

                        <button 
                            className="btn-login w-100 d-flex gap-4 justify-content-start align-items-center ps-5" 
                            onClick={handleGoogle}>
                            <i class="bi bi-google"></i>
                            Ingresar con Google
                        </button>

                        <button 
                            className="btn-login w-100 d-flex gap-4 justify-content-start align-items-center ps-5" 
                            onClick={handleEmail}>
                            <i class="bi bi-envelope"></i>
                            Ingresar con Email
                        </button>

                        <button 
                            className="btn-login w-100" 
                            onClick={handleLogin}>
                            Crear Cuenta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
