import React, { useState } from 'react'

const Login = () => {
  
  // const [user, setUser] = useState({
   // email: '',
   // password:''
  // })


  return (
    <div>
      <form>

      <label for="name">Email:</label><input type="email" name="email" id="email" />
      <label for="password">Password:</label><input type="password" name="password" id="password" />

      </form>
    </div>
  )
}

export default Login