import React, { useState } from 'react'
import Show from './Show'
import Add from './Add'

const Addandshow = () => {
    const[list,setlist]=useState([])
  return (
    <div>
        <Add/>
        <Show list={list}/>
    </div>
  )
}

export default Addandshow