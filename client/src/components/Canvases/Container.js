import React from 'react'
import { useState } from 'react/cjs/react.development'
import EarthCanvas from './EarthCanvas';
import OceanCanvas from './OceanCanvas';
import SkyCanvas from './SkyCanvas';

// stylesheets
import "./container.css"

function Container() {

  const [selectedTheme, setSelectedTheme] = useState("");
  console.log("selected theme", selectedTheme);

  return (
    <div >
      <div className="themes">
        <span>Select a theme:</span>
        <div className="btn-theme">
          <button className="btn-earth" onClick={() => setSelectedTheme("earth")} >earth</button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button className="btn-ocean" onClick={() => setSelectedTheme("ocean")} >ocean</button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button className="btn-sky" onClick={() => setSelectedTheme("sky")} >sky</button>
        </div>
      </div>
      <div className="canvases">
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
