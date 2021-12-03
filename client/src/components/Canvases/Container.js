import React, {useState, useRef} from 'react'
import EarthCanvas from './EarthCanvas';
import OceanCanvas from './OceanCanvas';
import SkyCanvas from './SkyCanvas';

// stylesheets
import "./container.css"

import Background from './background.jpg'

const themes = [
  {
    name: "earth"
  },
  {
    name: "ocean"
  },
  {
    name: "sky"
  }
]

function Container() {

  const [selectedTheme, setSelectedTheme] = useState("earth");
  console.log("selected theme", selectedTheme);

  const myRef = useRef()

  const executeScrollEarth = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSelectedTheme("earth")
  }
  const executeScrollOcean = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSelectedTheme("ocean")
  }
  const executeScrollSky = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSelectedTheme("sky")
  }

  return (
    <div >
      <div className="themes" style={{background: `url(${Background})`, backgroundSize: "150%"}}>
        <div className="layer">
        <span>Select a theme:</span>
        <div className="btn-theme">
          <button onClick={() => executeScrollEarth()} >earth</button>
          &nbsp;
          &nbsp;
          <span>•</span>
          &nbsp;
          &nbsp;
          <button onClick={() => executeScrollOcean()} >ocean</button>
          &nbsp;
          &nbsp;
          <span>•</span>
          &nbsp;
          &nbsp;
          <button onClick={() => executeScrollSky()} >sky</button>
          

        </div>
      </div>
      </div>
      <div className="canvases" ref={myRef}>
        {
          (selectedTheme === "earth") && <EarthCanvas />
        }
        {
          (selectedTheme === "ocean") && <OceanCanvas />
        }
        {
          (selectedTheme === "sky") && <SkyCanvas />
        }
        
      </div>

  </div>
  )
}

export default Container
