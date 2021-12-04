import { parse } from 'ipaddr.js';
import React, {useState, useEffect} from 'react'

import '../styles/gallery.css'

function Gallery() {

  const [pic, setPic] = useState('');

  const url = `http://localhost:5000/gallery`;
  const options = { method: "GET", headers: { "Content-type": "application/json" }};

  
  // async function display() {
  //   try {
      
  //     const response = await fetch("http://localhost:5000/gallery", {
  //       method: "GET",
  //       headers: {"Content-Type": "application/json"}
  //     });
      
  //     const parseRes = await response.json();
  //     const users_id = JSON.parse(localStorage.getItem('users_id'))
      
  //     console.log(parseRes)
      
      
  //     const posts = parseRes.map((post, i) => (
  //       <li key={i} className="list-group-item">{post.file_data}</li>
  //     ));

  //     return posts
      
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  

  // const users_id = JSON.parse(localStorage.getItem('users_id'))

  useEffect(async () => {
    const users_id = JSON.parse(localStorage.getItem('users_id'))
    const fetchedFact = await fetch(url, options).then(res => res.json());
    const blob = fetchedFact.map(fact => (fact.users_id === users_id) ? fact.file_name : null)
    
    console.log(blob)
    const link = document.createElement('a');
    link.href = blob;
    setPic(link.href);
}, []);

  return (

  

    <div className="gallery-div">
      <ul className="list-group list-group-flush">
        {pic}
      </ul>
    </div>
  )
}

export default Gallery
