import React from 'react'

const Decrement = (prop) => {
  return (
    <div>
        <button  className=" btn btn-info" onClick={prop.decrement}>Decrement</button>
    </div>
  )
}

export default Decrement