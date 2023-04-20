import { useState } from 'react'
import React from 'react'
import Data from './data.json'
import './App.css'


export default function App() {
   const[selected, setSelected] = useState(null)

   const toggle = (d) => {
     if(selected === d) {
       return setSelected(null)
     }
     setSelected(d)
   }

  return (
    <div className="wrapper">
      <div className="accordion">

          {Data.map((data, d) => (
             <div className="data"> 
                 <div className="title" onClick={() => toggle(d)}>
                    <h2>{data.question}</h2>
                    <span>{selected === d ? '-' : '+'}</span>
                 </div>
                 <div className={selected === d ? 'content show' : 'content'}>{data.answer}</div>

              </div> 
          ))}
    
      </div> 
    </div>
  )
}

