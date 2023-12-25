import React from 'react'
import App from './App'
import './App.css'

function Display({Rec}) {
console.log(Rec);
      return    
      !Rec ? <h1>'Hi Display Comp'</h1> : Rec.map(it=>  <b>{it}</b>)
    
}

export default Display;