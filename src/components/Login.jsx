import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../reducers/users';
import { login } from '../db';
import "./Login.css";
import Logo from "../assets/logos/logo alterno.png";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const inputHandle = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    login(user.email, user.password)
    navigate("/");
  };

  return (
    <div className="wrapper_login d-flex flex-column align-items-center justify-content-center mx-auto py-5">
      <div className='login_header d-flex flex-column align-items-center justify-content-center'>
        <img className="" src={Logo} alt="Logo TravelPack" />
        <h2 className="h4">Iniciar sesión</h2>
      </div>
      <div className='login_main d-flex justify-content-center'>
        <form className="row g-4 w-100 " onSubmit={handleSubmit}>
          <div className=" col-10  mx-auto d-flex flex-column">
            <label className="form-label mb-0">Correo electrónico</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="rounded-1 "
              placeholder="usuario@correo.com"
              onChange={inputHandle}
            />
          </div>
          <div className=" col-10  mx-auto d-flex flex-column">
            <label className="form-label mb-0">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-1 "
              placeholder="********"
              onChange={inputHandle}
            />
            <button
              className='px-0  mt-2 btn-contraseña align-self-center align-self-lg-end'>
              ¿Olvidaste tu contraseña?
            </button>
          </div>
          <div className=" col-10  mx-auto d-flex flex-column mr-auto">
            <button type="submit" className='btn btn-primary rounded-3 '>
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
