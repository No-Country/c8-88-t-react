import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()


  const handleRegister = () => navigate('/register')
  const handleLogin = () => navigate('/login')



  return (
    <div >
      hola desde el Home

      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>

  )
}

export default Home

