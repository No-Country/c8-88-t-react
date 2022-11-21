import React from 'react'
import { app } from '../db/index'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

const auth = getAuth(app)


const Cuenta = ({ user }) => {

  const navigate = useNavigate()

  const handleOut = () => {
    signOut(auth)
    navigate('/')
    console.log('vuelva pronto')
  }

  const handlePaq = () => {
    navigate('/envios')
  }


  return (
    <div>BIENVENIDO A TU CUENTA
      <button onClick={handlePaq}>cargar paquete</button>
      <button>mi paquete</button>
      <button>ajustes</button>
      <button onClick={handleOut}>cerrar sesion</button>
    </div>
  )
}

export default Cuenta