import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Dropdown from './Dropdown'

function PublicNav() {

  const [dropdown, setDropdown] = useState(false);
  

  return (
<>
  <div className="nav">
    <div className="nav--left-side">
      <Link to="/home" className="nav-bar-link-logo">MINDFUL ART</Link>
      <Link to="/home" className="nav-bar-link">Home</Link>
      <Link to="/about" className="nav-bar-link">Getting Started</Link>
    </div>

    <div className="nav--right-side"
    onMouseEnter={() => setDropdown(true)}
    onMouseLeave={() => setDropdown(false)}>
    <i class="fas fa-user"
    
    ></i>
    {dropdown && <Dropdown />}
    </div>
  </div>
</>
  )
}

export default PublicNav
