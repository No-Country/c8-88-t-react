import React from "react";
import { singFacebook, singGoogle } from "../../../db/index";
import { useNavigate } from "react-router-dom";
import { CardEnvios } from "./Card/CardEnvios";
import { Carrusel } from "./Carrusel";
import { FormDataPack } from "./FormDataPack";
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

  const handleRegister = () => navigate("/login");
  const handleLogin = () => navigate("/login");

  return (
    <>
      <div>
        <button onClick={handleRegister}>Register</button>
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
          <h5 className="mb-3" >Envíos en curso</h5>
          <div className="wrapper_cards d-flex w-100 flex-wrap">
            <CardEnvios destino="Barcelona" dias={3} />
            <CardEnvios destino="Madrid" dias={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
