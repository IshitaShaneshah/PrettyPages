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
import WishList from './WishList'
import Cart from './Cart'
const Home = () => {
  return (
    <>
    <Navbar/>
<<<<<<< Updated upstream
    <Intro/>
    <Catalog/>
    {/* <BookDetail/> */}
    {/* <VendorProducts/> */}
=======
    {/* <Intro/>
    <VendorProducts/>
    <PostProduct/>
    <Catalog/> */}
    <WishList/>
    {/* <BookInfo/> */}
    <Cart/>
>>>>>>> Stashed changes
    </>
  )
}

export default Home