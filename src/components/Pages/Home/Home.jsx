import React from "react";
import { singFacebook, singGoogle } from "../../../db/index";
import { useNavigate } from "react-router-dom";
import { Carrusel } from "./Carrusel";
import { FormDataPack } from "./FormDataPack";
import { DestinosBuscados } from "./EnvíosEnCurso/DestinosBuscados/DestinosBuscados";
import "./Home.css"

const Home = () => {
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

  return (
    <>
      <div>
        <button onClick={handleLogin}>Login</button>
        <div>
          <button onClick={handleFacebook}>Registrate con Facebook</button>
        </div>
        <div>
          <button onClick={handleGoogle}>Registrate con Google</button>
        </div>
      </div>
      <div className="wrapper_home">
        <Carrusel />
        <div className="wrapper_form d-flex justify-content-center">
          <FormDataPack />
        </div>
        <div className="wrapper_envios">
          <DestinosBuscados />
        </div>
      </div>
    </>
  );
};

export default Home;
