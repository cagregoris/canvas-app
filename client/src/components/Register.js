import React, { useState } from 'react'

import {toast} from "react-toastify";

function Register({setAuth}) {

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const {first_name, last_name, email, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()

    try {

      const body = {first_name, last_name, email, password}

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
        ,
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken)
  
        setAuth(true)

        toast.success("You are registered!", {
          icon: "🎨"
        })

      } else {
        setAuth(false);
        toast.error(parseRes, {
          icon: "🤔",
        });
      }



    } catch (err) {
      console.error(err.message)
    }
  }


  return (
    <div className="page-div">
      <h1>REGISTER</h1>
      <form onSubmit={onSubmitForm} >
        <input type="text" name="first_name" placeholder="First Name" value={first_name} onChange={e => onChange(e)} />
        <input type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={e => onChange(e)} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={e => onChange(e)} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={e => onChange(e)} />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
