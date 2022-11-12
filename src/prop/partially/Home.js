import React from 'react'
import { useState } from 'react'
import Header from '../partially/Header'
import Banner from '../partially/Banner'
import ProductList from '../partially/ProductList'
import Footer from '../partially/Footer'


const Home = () => {
    const [state,setstate]=useState([]);
const AddToCart=(title)=>{
setstate([...state,title])
}
  return (
    <div>
    <Header state={state}/>
    <Banner/>
     <ProductList AddToCart={AddToCart}/>
    <Footer/>


</div>
  )
}

export default Home