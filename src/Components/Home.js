import React from 'react'
import Navbar from './Navbar'
// import Product from './Product'
import "../CSS/Home.css"
import Catalog from './Catalog'
import Intro from "../Components/Intro"
const Home = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Catalog/>
    </>
  )
}

export default Home