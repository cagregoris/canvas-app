import React from 'react';
import myVideo from "../videos/demo.mov";

function About() {
  return (
    <div className="page-div">
      <div className="about--container">
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
