import React, { useRef, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Background from './ocean.jpg';

import './canvas.css'

const colors = [
  {
    ref: "#D7E9F3"
  },
  {
    ref: "#6EB8C3"
  },
  {
    ref: "#0D7479"
  },
  {
    ref: "#A7998E"
  },
  {
    ref: "#72757A"
  },
  {
    ref: "#074268"
  }
]

const lineWidth = [
  {
    name: "select brush size",
    value: 3
  },
  {
    name: "x-small",
    value: 1
  },
  {
    name: "small",
    value: 3
  },
  {
    name: "medium",
    value: 7
  },
  {
    name: "large",
    value: 10
  },
  {
    name: "x-large",
    value: 15
  }
]

function OceanCanvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [selectedSize, setSelectedSize] = useState(lineWidth[0]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 600 * 2
    canvas.height = 600 * 2
    canvas.style.width = '600px'
    canvas.style.height = '600px'

    const context = canvas.getContext('2d')
    context.scale(2, 2)
    context.lineCap = "round"
    context.strokeStyle = selectedColor;
    context.lineWidth = selectedSize;
    contextRef.current = context;
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    contextRef.current.clearRect(0, 0, contextRef.current.canvas.width, contextRef.current.canvas.height)
    contextRef.current.fillRect(0, 0, contextRef.current.canvas.width, contextRef.current.canvas.height)
  }

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing) {
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.strokeStyle = selectedColor;
    contextRef.current.lineWidth = selectedSize;
    contextRef.current.stroke();
  }

  return (
    <div className="container-painting" style={{background: `url(${Background})`, backgroundSize: "100%"}}>

      

      <div className="painting">

        <canvas className="canvas"
         onMouseDown={startDrawing}
         onMouseUp={finishDrawing}
         onMouseMove={draw}
         ref={canvasRef}
        />

      </div> 

        <div className="buttons-painting"> 
        <div className="palette-div" style={{backgroundColor:"#EFE5DD"}}>
          {
            colors.map(
              color => <button 
                className="btn-palette" 
                onClick={(e) => setSelectedColor(e.target.value)} 
                value={color.ref}
                style={{backgroundColor:`${color.ref}`}}
                >

                </button>
              )
          }
         
        </div>
          &nbsp;
          &nbsp;

        <div>
          <select
            className="btn-paint"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {
              lineWidth.map(
                size => <option key={size.name} value={size.value}>{size.name}</option>
                )
              }        
          </select>
        </div>
          &nbsp;
          &nbsp;

        <div>
          <button className="btn-paint" onClick={clear}>Clear</button>
          &nbsp;
          &nbsp;
          <button className="btn-paint" onClick={download}>Download</button>
        </div>
          
        </div>
            <Link to="/painting"></Link>
    </div>
     )
    }
    export default OceanCanvas;
