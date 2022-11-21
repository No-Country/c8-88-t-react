import React from "react";
import { singFacebook, singGoogle } from "../db/index";
import { useNavigate } from "react-router-dom";

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
    <div>
      hola desde el Home
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <div>
        <button onClick={handleFacebook}>Registrate con Facebook</button>
      </div>
      <div>
        <button onClick={handleGoogle}>Registrate con Google</button>
      </div>
    </div>
  );
};

export default Home;
