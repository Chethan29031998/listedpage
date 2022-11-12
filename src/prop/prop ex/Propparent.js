import React, { useState } from 'react'
import Propchild from './Propchild'
const Propparent = () => {
    const[state, setstate]=useState("hello from parent")
    const fn=()=>{
      console.log("printing outfrom parent component")  
    }

  return (

    
    <div>
        <h1>parent component</h1>
        <Propchild data={state} somerandomdata={85858}  name="chethan" age="45" changemethod={fn}/>
    </div>
    
  )
}

export default Propparent