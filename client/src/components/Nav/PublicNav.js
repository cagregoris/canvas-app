import React from 'react'
import { Link } from "react-router-dom"

function PublicNav() {
  return (

<div className="nav">
<h1>PUBLIC NAV</h1>
  <div className="nav--left-side">

  </div>

  <div className="nav--middle">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </div>

  <div className="nav--right-side">
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
</div>
  )
}

export default PublicNav
