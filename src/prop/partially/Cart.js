import React from 'react'

const Cart = (props) => {
    
  return (
    <>
    <img  width="40px" height="50px" src="https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-6-2/32/Cart-E_commerce-Global-Shopping-Online-512.png" />
    <span>{props.cart.length}</span>
    </>
  )
}

export default Cart