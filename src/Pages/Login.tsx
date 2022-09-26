import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function loginNow(){
    navigate('/')
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginNow}>Login Now</button>
    </div>
  )
}

export default Login