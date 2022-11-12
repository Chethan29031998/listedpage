import React, { useState } from 'react'
import Child1 from './Child1'
const Parent = () => {
    const[state, setstate]=useState("i am from main parent component")
  return (
    <div>
        <Child1 data={state} name="chethan"/>
    </div>
  )
}

export default Parent