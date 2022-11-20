import React from 'react'
import { useState} from 'react'
import { login } from '../db/registers';
import { useNavigate } from 'react-router';


const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState();

  const handleChange = e => {
    setUser({
     ...user,
     [e.target.name] : e.target.value
    })
 }

 const handleSubmit = async (e) => {
   e.preventDefault()
   try{
    await login(user.email, user.password)
     navigate('/cuenta')

   }catch(error){
     console.log(error.message)
    
    }
  }
   

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"  onClick={handleChange}/>
        <input type="password" name="password" onClick={handleChange} />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login
