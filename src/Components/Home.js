import React from 'react'
import Navbar from './Navbar'
// import Product from './Product'
import "../CSS/Home.css"
import Catalog from './Catalog'
import Intro from "../Components/Intro"
import BookDetail from './BookDetail'
import BookInfo from './BookInfo'
import VendorProducts from './VendorProducts'
import PostProduct from './PostProduct'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    {/* <Catalog/> */}
    <BookDetail/>
    {/* <Catalog/> */}
    {/* <BookDetail/> */}
    <Temp/>
    </>
  )
}

export default Home