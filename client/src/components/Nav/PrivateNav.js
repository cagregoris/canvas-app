import React from 'react'

function PrivateNav({setAuth}) {
  return (
    <div>
      <h1>PRIVATE NAV</h1>
      <button onClick={() => setAuth(false)}>Logout</button>
    </div>
  )
}

export default PrivateNav
