import React from 'react'

const Increment = (prop) => {
  return (
    <div>
        <button className='btn btn-info' onClick={prop.increment}>
Increment
        </button>
    </div>
  )
}

export default Increment