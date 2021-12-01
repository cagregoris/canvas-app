import React from 'react'
import { Link } from "react-router-dom"

function PublicNav() {
  return (
    <div>
      <h1>PUBLIC NAV</h1>
      <Link to="/login">LOGIN</Link>
      <br></br>
      <Link to="/register">REGISTER</Link>
    </div>
  )
}

export default PublicNav
