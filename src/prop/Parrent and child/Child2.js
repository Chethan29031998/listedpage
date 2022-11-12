import React from 'react'
import Child3 from './Child3'
const Child2 = (prop) => {
  return (
    <div>
        <h1>child2-{prop.data}</h1>
        <Child3 data={prop.data}/>
        {/* <Child3 /> */}
    </div>
  )
}

export default Child2