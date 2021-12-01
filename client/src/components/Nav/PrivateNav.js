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
      <h1>PRIVATE NAV</h1>
      <div className="nav--left-side">

      </div>

      <div className="nav--middle">
        <Link to="/canvas">Blank Canvas</Link>
      </div>

      <div className="nav--right-side">
        <a>Welcome, {name}!</a>
        <button onClick={(e) => logout(e)}>Logout</button>
      </div>
    </div>
  )
}

export default PrivateNav
