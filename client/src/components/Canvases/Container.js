import React from 'react'
import { useState } from 'react/cjs/react.development'
import EarthCanvas from './EarthCanvas';
import OceanCanvas from './OceanCanvas';
import SkyCanvas from './SkyCanvas';

// import "./earthCanvas.css"

function Container() {

  const [selectedTheme, setSelectedTheme] = useState("");
  console.log("selected theme", selectedTheme);

  return (
    <div>
      <div>
        <span>Select a theme:</span>
      </div>
      <div className="themes">
        <button onClick={() => setSelectedTheme("earth")} >earth</button>
        <button onClick={() => setSelectedTheme("ocean")} >ocean</button>
        <button onClick={() => setSelectedTheme("sky")} >sky</button>
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

      <div>
       
        
      </div>

      
    </div>
  )
}

export default Container
