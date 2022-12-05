import React from 'react'
import { auth } from '../../../db'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { unsetUser } from '../../../reducers/users'





const Cuenta = ({ user }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOut = async (e) => {
    e.preventDefault();
    dispatch(unsetUser());
    await signOut(auth)
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