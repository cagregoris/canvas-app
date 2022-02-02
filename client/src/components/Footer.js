import React from "react";

function Footer() {
  return (
    <div className="banner--container">
      <div className="banner">
        <div id="dark">dark</div>
        <div id="light">light</div>
        <div id="medium">medium</div>
      </div>
      <div className="footer--container">
        <div className="footer--note">
          <span>Thank you for visiting</span>
          <span className="nav-bar-link-logo">MINDFUL ART</span>
        </div>
        <div className="connect--container">
          <h4>Connect with me</h4>
          <div className="socials--container">
            <div className="social">
              <a href="mailto: carolyn.a.scobie@gmail.com"><i class="fas fa-envelope-square"></i>carolyn.a.scobie@gmail.com</a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/carolyn-gregoris-scobie-24b953159/" target="_blank"><i class="fab fa-linkedin"></i>Linkedin</a>
            </div>
            <div className="social">
              <a href="https://github.com/cascobie" target="_blank"><i class="fab fa-github" id="github--footer"></i>Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
