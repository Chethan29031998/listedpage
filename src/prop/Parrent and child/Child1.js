import React from 'react'
import Child2 from './Child2'
const Child1 = (prop) => {
  return (
    <div>
        <h1>child-1-{prop.data}</h1>
        <Child2 data={prop.data}/>
        
        </div>
  )
}

export default Child1