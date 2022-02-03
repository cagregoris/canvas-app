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
      console.log("register parseres", parseRes)


      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken)
        localStorage.setItem("users_id", parseRes.loggedInId)
  
        setAuth(true)

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
      <div className="register-form--container">

        <header class="user__header">
          <h2>Create an Artist Account</h2>
          <span>*note: the email provided does not have to be a valid email, it just has to be in correct email format - example@example.com. You don't have to provide your real email :)</span>
        </header>

        <div className="form--div">
        <form onSubmit={onSubmitForm} className="form">
          <div className="form__group">
            <input autoComplete="none" type="text" name="first_name" placeholder="First Name" value={first_name} onChange={e => onChange(e)} className="form__input"/>
          </div>

          <div className="form__group">
            <input autoComplete="none" type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={e => onChange(e)} className="form__input"/>
          </div>

          <div className="form__group">
            <input autoComplete="none" type="email" name="email" placeholder="Email" value={email} onChange={e => onChange(e)} className="form__input"/>
          </div>

          <div className="form__group">
            <input autoComplete="none" type="password" name="password" placeholder="Password" value={password} onChange={e => onChange(e)} className="form__input"/>
          </div>
          <button className="btn">Register</button>
        </form>
        </div>


      </div>
    </div>
  )
}

export default Register
