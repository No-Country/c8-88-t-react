import React from 'react'
import { useState} from 'react'
import { singFacebook, singUp, singGoogle } from '../db/registers'
import { useNavigate } from 'react-router'

const Register = () => {

  const [error, setError] = useState()
  const navigate = useNavigate()
  

  const [user, setUser] = useState({
    email: "",
    fullName: "",
    password: ""
  })

  const handleFacebook = () => {
    singFacebook()
    navigate('/cuenta')
  }

  const handleGoogle = () => {
     singGoogle()
     navigate('/cuenta')
  }


  
  const handleChange = e => {
     setUser({
      ...user,
      [e.target.name] : e.target.value
     })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await singUp(user.email, user.fullName, user.password)
      navigate('/cuenta')

    }catch(error){
      console.log(error.code)
      if(error.code === 'auth/internal-error'){
        setError('Correo Invalido')
      }

    }
  }


  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
           <input name="email"  type="email"  placeholder="email" onChange={handleChange}/>
           <input name="fullName" type="text" placeholder="fullName" onChange={handleChange} />
           <input name="password" type="password" placeholder="******" onChange={handleChange}/>
       <button>Send</button>
      </form>
      <div>
        <button onClick={handleFacebook}>Registrate con Facebook</button>
      </div>
      <div>
        <button onClick={handleGoogle}>Registrate con Google</button>
      </div>

    </div>

  )
}

export default Register