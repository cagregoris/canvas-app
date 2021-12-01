import React, {useState} from 'react'

import {toast} from "react-toastify";

function Login({setAuth}) {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()

    try {

      const body = { email, password }

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {"Content-type": "application/json"}
        ,
        body: JSON.stringify(body)
      })

      const parseRes = await response.json()


      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken)
  
        setAuth(true)

        toast.success("You are logged in!", {
          icon: "🎨"
        })

      } else {
        setAuth(false);
        toast.error(parseRes, {
          icon: "🤔",
        });
      }

      
    } catch (err) {
      console.error(err.message);
    }

  }


  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={onSubmitForm}>
        <input type="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
