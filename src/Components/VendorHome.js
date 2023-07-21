import React from "react";
import PostProduct from "./PostProduct";
import VendorProducts from "./VendorProducts";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import { useState } from 'react'
import VendorMain from "./VendorMain";

const VendorHome = (props) => {
  const [toggle, setToggle] = useState(0);
const toggleHandler = (value) => {
  setToggle(value);
  console.log(value);
};
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
        <VendorProducts />
      ) : 
        <VendorMain/>
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
