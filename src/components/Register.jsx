import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../reducers/users';
import { regisEmail } from '../db';
import Logo from "../assets/logos/logo alterno.png";

function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user)
  const [user, setUser] = useState({
    email: "",
    fullName: "",
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
    try {
      dispatch(addUser(user));
      regisEmail(user.email, user.fullName, user.password)
      state.isAuthenticated ? navigate("/register") : navigate('/')
    } catch (error) {
      console.log(error)
    }
  };


  return (<>
    <div className="wrapper_login d-flex flex-column align-items-center justify-content-center mx-auto py-5">
      <div className='login_header d-flex flex-column align-items-center justify-content-center'>
        <img className="" src={Logo} alt="Logo TravelPack"/>
        <h2 className="h4">Registra tu cuenta</h2>
      </div>

      <div className='login_main d-flex justify-content-center'>
        <form className="row g-4 w-100 " onSubmit={handleSubmit}>

        <div className=" col-10  mx-auto d-flex flex-column">
            <label className="form-label mb-0">Correo electrónico</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-1 "
                  placeholder="usuario@correo.com"
                  onChange={inputHandle}
                />
          </div>

          <div className=" col-10  mx-auto d-flex flex-column">
            <label className="form-label mb-0">Nombre y apellido</label>
              <input
                  id="fullName"
                  name="email"
                  type="text"
                  required
                  className="rounded-1 "
                  placeholder="Juan Pérez"
                  onChange={inputHandle}
                />
          </div>

          <div className=" col-10  mx-auto d-flex flex-column">
            <label className="form-label mb-0">Contraseña</label>
              <input
                  id="pass"
                  name="password"
                  type="password"
                  required
                  className="rounded-1 "
                  placeholder="********"
                  onChange={inputHandle}
                />
          </div>

          <div className=" col-10  mx-auto d-flex flex-column mr-auto">
            <button type="submit" className='btn btn-primary rounded-3 '>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>)
};

export default Register;
