import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function PrivateNav({setAuth}) {

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: {token: localStorage.token}
      });


      const parseRes = await response.json();

      setName(parseRes.first_name)


    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = e => {
    e.preventDefault();

     localStorage.removeItem("token");

     setAuth(false);
  }
  
  useEffect(() => {
    getName()
  }, [])


  return (
    
    <div className="nav">
      <div className="nav--left-side">
        <Link to="/home" className="nav-bar-link-logo">LOGO</Link>
        <Link to="/home" className="nav-bar-link">Home</Link>
        <Link to="/about" className="nav-bar-link">About</Link>
        <Link to="/canvas" className="nav-bar-link">Blank Canvas</Link>
      </div>

      <div className="nav--right-side-private">
        <a id="welcome">Welcome, {name}!</a>
        <button className="btn-main" onClick={(e) => logout(e)}>Logout</button>
      </div>
    </div>
  )
}

export default PrivateNav
