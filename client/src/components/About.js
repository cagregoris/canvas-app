import React from 'react';
import myVideo from "../videos/demo.mov";
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page-div">
      <div className="about--container">
        <div className="instructions-text--container">
          <span id="instructions-large">To accesss your canvas, please <Link to="/login" style={{color: '#726e5f', textDecoration: 'underline' }}>login</Link> or <Link to="/register" style={{color: '#726e5f', textDecoration: 'underline' }}>register</Link> for an account.</span>
          <br></br>
          <span id="instructions-small">Once you are logged in, the demo below will help you get started on your masterpiece.</span>
        </div>
        <div className="demo--container">
          <video width="80%" controls autoplay>
            <source src={myVideo} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  )
}

export default About
