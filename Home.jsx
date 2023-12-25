import React from 'react'
import "./App.css";
import { Link } from  'react-router-dom'

function  Home() {
  const abc=10

  return (
    
    <div className="App">

       <div className="home p-16 text-9xl  font-extrabold" >{abc}Home</div>
   <Link to="/" className='hover:text-blue-950' >back
   </Link>

</div>
)}

export default Home