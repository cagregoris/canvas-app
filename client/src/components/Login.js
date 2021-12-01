import React from 'react'

function Login({setAuth}) {
  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={() => setAuth(true)}>Login</button>
    </div>
  )
}

export default Login
