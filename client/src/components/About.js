import React from 'react';
import myVideo from "../videos/demo.mov";

function About() {
  return (
    <div className="page-div">
      <div className="about--container">
        <div className="instructions-text--container">
          <span id="instructions-large">To accesss your canvas, please login or register for an account.</span>
          <br></br>
          <span id="instructions-small">Once you are logged in, the demo below will help you to get started on your masterpiece.</span>
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
