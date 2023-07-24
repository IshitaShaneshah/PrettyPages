import React, { useEffect } from 'react'
import "../CSS/UserHome.css"
import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'
import Catalog from "./Catalog"
import { useState } from 'react'
import UserMain from './UserMain'
import WishList from './WishList'
import Cart from './Cart'
import BookInfo from "./BookInfo"
import PostProduct from './PostProduct'
import VendorProducts from './VendorProducts'
const UserHome = (props) => {
  const[toggle,setToggle]=useState(0);
  const[state,setState]=useState({
    wishList:[],
    cart:[],
    totalAmount:0,
    count:0,
    email:localStorage.getItem("uemail")
})
// useEffect(()=>{
//  setState(...state,
//   [email]:localStorage.getItem("uemail"));
// })
console.log(state);
  const toggleHandler=(value)=>{
    setToggle(value);
    console.log(value);
}
  return (
    <>
    <UserNavbar user="buyer" toggleHandler={toggleHandler} logoutHandler={props.logoutHandler}/>
    {      
      toggle===1?<Catalog/>:
      toggle===2?<WishList/>:
      toggle===3?<Cart/>:
      <UserMain/>
    }
    
    <UserFooter user="buyer" toggleHandler={toggleHandler} logoutHandler={props.logoutHandler}/>
    </>
  )
}

export default UserHome