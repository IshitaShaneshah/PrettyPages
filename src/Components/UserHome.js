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
  const[bookinfo,setBookinfo]=useState({});
  const[subGenre,setSubGenre]=useState("");
  const[search,setSearch]=useState("");
  const toggleHandler=(value,genre)=>{
    setToggle(value);
    console.log(value);
    console.log(genre);
    setSubGenre(genre);
}
console.log(subGenre);

const displaybook=(book)=>{
  setBookinfo(book)
}
const searchHandler=(book_name)=>{
 setSearch(book_name);
}
  return (
    <>
    <UserNavbar user="buyer" toggleHandler={toggleHandler} logoutHandler={props.logoutHandler} searchHandler={searchHandler}/>
    {      
      toggle===1?<Catalog toggleHandler={toggleHandler} displaybook={displaybook} subGenre={subGenre} search={search}/>:
      toggle===2?<WishList/>:
      toggle===3?<Cart/>:
      toggle===4?<BookInfo bookinfo={bookinfo}/>:
      <UserMain toggleHandler={toggleHandler}/>
    }
    
    <UserFooter user="buyer" toggleHandler={toggleHandler} logoutHandler={props.logoutHandler}/>
    </>
  )
}

export default UserHome