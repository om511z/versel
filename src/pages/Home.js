import React from 'react'
import Category from '../components/Category'
import Festival from '../components/Festival'
import Navbar2 from '../components/Navbar2'
import NewArrival from '../components/NewArrival'
import ProductSlider from '../components/ProductSlider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar2/>
      <Category/>
      <Festival/>
      <ProductSlider/>
      <NewArrival/>
      <Footer/>
    </div>
  )
}

export default Home