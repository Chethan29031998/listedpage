import React, { useState } from 'react'
import Decrement from './Decrement'
import Increment from './Increment'



const Inanddec = () => {

    const[counter,setcounter]=useState(0)
   
    const increment=()=>{
setcounter(counter+1)

   }

   const decrement=()=>{
    setcounter(counter-1)
       }

  return (
    <div>
        
        <Increment increment={increment}/>
        <Decrement  decrement={decrement}/>
        <h1>{counter}</h1>
    </div>
  )
}

export default Inanddec