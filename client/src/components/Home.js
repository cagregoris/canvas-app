import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-div">
        <div className="intro--container">
          <p>Our selection of <span>soothing color palettes and calming nature sounds</span> come together to create a zen-like atmosphere where you can creatively express yourself and find inner peace.</p>
          <br></br>
          <br></br>
          <p id="use-mouse">Use your mouse or touchpad as a paintbrush and begin to create your calm..</p>
        </div>
        <div className="quote--container">
          <p>"Art is a guarantee of sanity...this is the most important thing I have said..." -Louise Bourgeois</p>
        </div>
        <div className="inspiration--container">
          <h4>Why I created this app...</h4>
          <p>For years, I have used art as a way to relax and train my mind to live in the present moment. I believe that training the right side of our brain increases our awareness and helps us to accept our thoughts and feelings without judgement.</p>
          <p>My favourite thing to do at the end of a busy day is listen to calming music, pick up a paintbrush, and zone out. For me, creating art is about breaking free from the constant chatter of our minds.</p>
          <p>I created this app because I wanted to share this ritual with others.</p>
        </div>
        <div className="tech--container">
          <div className="tech-title--container">
            <h4>Technologies Used</h4>
          </div>
          <div className="tech-grid--container">
            <div className="tech--grid">
              <div className="tech--unit">
                <i class="fab fa-html5"></i>
                <span>HTML5</span>
              </div>
              <div className="tech--unit">
                <i class="fab fa-css3"></i>
                <span>CSS3</span>
              </div>
              <div className="tech--unit">
                <i class="fab fa-js"></i>
                <span>Javascript</span>
              </div>
              <div className="tech--unit">
                <i class="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech--unit">
                <i class="fab fa-node"></i>
                <span>Node.js</span>
              </div>
              <div className="tech--unit">
                <i class="devicon-express-original"></i>
                <span>Express</span>
              </div>
            </div>
          </div>
          <div className="github-repo--link">
            <a href="https://github.com/cascobie/canvas-app" target="_blank"><i class="fab fa-github"></i>Github Repo</a>
          </div>
        </div>
        <div className="nature-radio--container">
          <p>All the sounds in this app were created by <a href="https://natureradio.org/" target="_blank" id="nature-radio--link">Nature Radio</a></p>
          <p>Nature Radio is a non-profit organization created to archive and share the natural sounds from the world’s national parks and protected areas.</p>
          <p>Their work aims to foster an awareness of the natural world, and promote conservation and joy for our Earth’s beautiful and biologically rich places.</p>
          <div className="patreon--link">
            <a href="https://www.patreon.com/natureradio?fan_landing=true" target="_blank">Support Nature Radio with a donation on their Patreon</a>
          </div>
        </div>
        <div className="how-to--link">
          <Link to="/about" style={{ textDecoration: 'none', color: '#726e5f' }}><b>Click</b> here for instructions...</Link>
        </div>
    </div>
  )
}

export default Home
