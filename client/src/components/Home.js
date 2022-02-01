import React from 'react'

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
          <h4>Technologies Used</h4>
          <div className="tech--grid">
            <div className="tech--unit">
              <span>HTML5</span>
            </div>
            <div className="tech--unit">
              <span>CSS3</span>
            </div>
            <div className="tech--unit">
              <span>Javascript</span>
            </div>
            <div className="tech--unit">
              <span>React</span>
            </div>
            <div className="tech--unit">
              <span>Node.js</span>
            </div>
            <div className="tech--unit">
              <span>Express</span>
            </div>
          </div>
          <div className="github-repo--link">
            <a>Github Repo</a>
          </div>
        </div>
        <div className="how-to--link">

        </div>

    </div>
  )
}

export default Home
