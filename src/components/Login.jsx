import React from 'react'
import { useState} from 'react'
import { app } from '../db/index';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore, doc, collection, setDoc } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';

const auth = getAuth(app)


function Login() {
  const navigate = useNavigate()
  const firestore = getFirestore(app);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
      navigate('/cuenta')
    }
  }

  return (
    <div>
      <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

      <form onSubmit={submitHandler}>
        <label>
          Correo electrónico:
          <input type="email" id="email" />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="viajero">Viajero</option>
            <option value="user">Usuario</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
        />
      </form>

      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
    </div>
  );
}

export default Login;
