import React from 'react'
import { app } from '../../../db'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { unsetUser } from '../../../reducers/users'


const auth = getAuth(app)


const Cuenta = ({ user }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOut = (e) => {
    e.preventDefault();
    dispatch(unsetUser());
    navigate('/')
    alert("vuelva pronto")
  }

  const handlePaq = () => {
    navigate('/envios')
  }

  const handleMiPaquete = () => {
    navigate('/mipaquete')
  }


  return (
    <div>BIENVENIDO A TU CUENTA
      <button onClick={handlePaq}>cargar paquete</button>
      <button onClick={handleMiPaquete }>mi paquete</button>
      <button>ajustes</button>
      <button onClick={handleOut}>cerrar sesion</button>
    </div>
  )
}

export default Cuenta