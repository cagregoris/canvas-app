import { parse } from 'ipaddr.js';
import React, {useState, useEffect} from 'react'


import '../styles/gallery.css'

function Gallery() {

  const [pic, setPic] = useState('');

  const url = `http://localhost:5000/gallery/img/20`;
  const options = { method: "GET", headers: { "Content-type": "text/plain" }};

  
  // async function display() {
  //   try {
      
  //     const response = await fetch("http://localhost:5000/gallery/img/2", {
  //       method: "GET",
  //       headers: {"Content-Type": "text/plain"}
  //     });
      
  //     const parseRes = await response.json();
    
      
  //     console.log(parseRes)
      

      
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  
  useEffect(async () => {
    const blob = await fetch(url, options).then(res => res.text());
    
    
    console.log(blob)
    
   
    setPic(blob);
}, []);
  

  return (

  

    <div className="gallery-div">
     <ul className="list-group list-group-flush">
        <img src={pic}/> 
        {pic}
      </ul>
    </div>
  )
}

export default Gallery
