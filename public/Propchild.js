import React from 'react'


const Propchild = (props) => {
    console.log(props)
  return (
    <div>
       <h1 style={{color:"green"}}>{props.name}</h1>
       <h1 style={{color:"red"}}>{props.somerandomdata}</h1>
       <h1 style={{color:"blue"}}>{props.age}</h1>
       <h1 style={{color:"yellow"}}>{props.name}</h1>
       <button onClick={props.changemethod}>Click me for a child</button>
    </div>
  )
}

export default Propchild