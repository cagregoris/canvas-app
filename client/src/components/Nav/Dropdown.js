import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/dropdown.css'

function Dropdown() {

  const [dropdown, setDropdown] = useState(false);


  return (
    <>

      <ul className={dropdown ? "profile-submenu-clicked" : "profile-submenu"} onClick={() => setDropdown(!dropdown)}>
        <li>
          <Link to="/login" className="submenu-item" onClick={() => setDropdown(false)}>Login</Link>
        </li>
        <li>
          <Link to="/register" className="submenu-item" onClick={() => setDropdown(false)}>Register</Link>
        </li>
      </ul>
      
    </>
  )
}

export default Dropdown
