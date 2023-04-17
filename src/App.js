import React from 'react'
import Data from './data.json'


export default function App() {
  return (
    <div>
    {
      Data && Data.map( data => {
        return(
         <div key={data.id}>
         <p><b>{ data.question }</b></p>
         <p>{ data.answer }</p>
         {data.bullets}
         </div>
        )
      })
    }
    </div>
  )
}

