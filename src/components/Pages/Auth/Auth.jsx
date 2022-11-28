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
            <div className="wrapper_auth mx-auto  d-flex gap-2">
                <div className="w-50 d-flex flex-column justify-content-center gap-5 align-items-center">
                    <p className="h5 mx-auto text-center m-0">Realiza envíos al exterior mediante viajeros</p>
                    <img  className="mx-auto" src={login} alt="Envía un paquete" />
                </div>
                <div className="w-50 d-flex flex-column justify-content-center gap-5 align-items-center">
                    <span></span>
                    <div className="wrapper_btn d-flex flex-column justify-content-between">
                        <button className="btn-login w-100" onClick={handleFacebook}>Ingresar con Facebook</button>

                        <button className="btn-login w-100" onClick={handleGoogle}>Ingresar con Google</button>

                        <button className="btn-login w-100" onClick={handleEmail}>Ingresar con Email</button>

                        <button className="btn-login w-100" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
