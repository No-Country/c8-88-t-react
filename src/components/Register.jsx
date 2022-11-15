import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setUser from '../reducers/users/index'

const Register = () => {
  const dispatch = useDispatch();
  const {email, fullName, password} = useSelector(state => state.user)

  
  


  return (
    <div>
      <form action="">
           <label For="email">email:</label><input type="email"  id="email"/>
           <label For="full name">full name:</label><input type="text" id="fullName"/>
           <label For="password">password:</label><input type="password" id="password"/>
      </form>
      <button>Send</button>
    </div>

  )
}

export default Register