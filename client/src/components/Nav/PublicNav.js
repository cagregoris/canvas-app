import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Dropdown from './Dropdown'

function PublicNav() {

  const [dropdown, setDropdown] = useState(false);
  

  return (
<>
  <div className="nav">
    <div className="nav--left-side">
      <Link to="/home" className="nav-bar-link">LOGO</Link>
    </div>

    <div className="nav--middle">
      <Link to="/home" className="nav-bar-link">Home</Link>
      <Link to="/about" className="nav-bar-link">About</Link>
    </div>

    <div className="nav--right-side"
    onMouseEnter={() => setDropdown(true)}
    onMouseLeave={() => setDropdown(false)}>
    <i class="fas fa-user"
    
    ></i>
    {dropdown && <Dropdown />}
    


      {/* <button className="btn-main"><Link to="/login" style={{textDecoration:"none", color:"black"}}>Login</Link></button>
      <button className="btn-main"><Link to="/register" style={{textDecoration:"none", color:"black"}}>Register</Link></button> */}
    </div>
  </div>
</>
  )
}

export default PublicNav
