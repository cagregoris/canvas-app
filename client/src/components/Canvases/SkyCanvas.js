import React, { useRef, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './canvas.css'

const colors = [
  {
    name: "red",
    ref: "#D92C20"
  },
  {
    name: "pink",
    ref: "#F789A7"
  },
  {
    name: "orange",
    ref: "#FC813E"
  },
  {
    name: "yellow",
    ref: "#F5D56A"
  },
  {
    name: "green",
    ref: "#4CAF50"
  },
  {
    name: "blue",
    ref: "#12BFEC"
  },
  {
    name: "purple",
    ref: "#7A55BD"
  },
  {
    name: "black",
    ref: "#000000"
  }
]

const lineWidth = [
  {
    name: "select size",
    value: 1
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

function SkyCanvas() {
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
    canvas.style.border = "2px solid #000";

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
    <div className="container-painting">

      

      <div className="painting">

        <canvas className="canvas"
         onMouseDown={startDrawing}
         onMouseUp={finishDrawing}
         onMouseMove={draw}
         ref={canvasRef}
        />

</div> 
        <div className="buttons-painting"> 
          {/* <select
            className="btn-paint"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {
              colors.map(
                color => <option key={color.name} value={color.ref}>{color.name}</option>
                )
              }        
          </select> */}
          
          {
            colors.map(
              color => <button onClick={(e) => setSelectedColor(e.target.value)} value={color.ref}>{color.name}</button>
              )
          }
         
          &nbsp;
          &nbsp;
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
          &nbsp;
          &nbsp;
          <button className="btn-paint" onClick={clear}>Clear</button>
          &nbsp;
          &nbsp;
          <button className="btn-paint" onClick={download}>Download</button>
        </div>
            <Link to="/painting"></Link>
    </div>
     )
    }
    export default SkyCanvas;
