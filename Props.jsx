import React from 'react'
import { Link } from 'react-router-dom'

function  Props({bc, pu}) {
  let cb=bc
    return (
    <div className='App p-28'>
      Props  {cb} {pu}
        <Link to="/" className= 'm-24'>back</Link>
        </div>
  ) 
}

export default  Props