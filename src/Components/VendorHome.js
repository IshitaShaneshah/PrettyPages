import React from "react";
import PostProduct from "./PostProduct";
import VendorProducts from "./VendorProducts";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import { useState } from 'react'
import VendorMain from "./VendorMain";
import { useEffect } from "react";
import axios from "axios";
const VendorHome = (props) => {
  const [toggle, setToggle] = useState(0);
  const [vemail,setVemail]=useState("");
  const [book, setBook] = useState();

const toggleHandler = (value) => {
  setToggle(value);
  console.log(value);
};
useEffect(()=>{
  setVemail(localStorage.getItem("vemail"));
  if(vemail){
    axios.post("http://localhost:3100/api/v2/vendorcatalog",{
      vemail: vemail
    })
  }
})
  useEffect(()=>{
    console.log("hoo")
    getData();
  },[]) 

  const getData = async()=>{
    console.log("hii")
    const response = await axios.get("http://localhost:3100/api/v2/catalog")
    setBook(response.data.message);
    console.log(response)
}
const deleteHandler=(ele)=>{
  axios.delete(`http://127.0.0.1:3100/api/v2/delete/${ele._id}`)
  console.log("deleted")
  getData()
}
  // const response = axios.get("http://localhost:3100/api/v2/vendorcatalog")
  //   console.log(response)  
  return (
    <>
      <UserNavbar
        user="vendor"
        toggleHandler={toggleHandler}
        logoutHandler={props.logoutHandler}
      />
      {toggle === 1 ? (
        <PostProduct />
      ) : toggle === 2 ? (
        <VendorProducts toggleHandler={toggleHandler} book={book} deleteHandler={deleteHandler}/>
      ) : 
        <VendorMain toggleHandler={toggleHandler}/>
      }

      <UserFooter
        user="vendor"
        toggleHandler={toggleHandler}
        logoutHandler={props.logoutHandler}
      />
    </>
  );
};

export default VendorHome;
