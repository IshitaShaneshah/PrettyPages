import React, { useEffect, useState } from "react";
import "../CSS/Catalog.css";
import Product from "./Product";
import axios from "axios";
const Catalog = () => {
  const [bookData, setBookData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList,setWishList]=useState([])
  const [count, setCount] = useState(0);
  // const [amount,setAmount]=useState(0);
  const [totalAmount,setTotalAmount]=useState(0);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v2/bookDisplay"
    );
    setBookData(response.data.message);
  };
  useEffect(() => {
    getData();
    getData();
  }, []);
useEffect(()=>{
  console.log(wishList,"kk")
})
  const addToCart = (book) => {
    let index = cart.findIndex((obj) => obj._id === book._id);
    if (index !== -1) {
      cart[index].count += 1;
      setTotalAmount(totalAmount+book.price);    
      book.amount+=book.price;
    } else {
      book.count = 1;
      book.amount=book.price;
      setTotalAmount(totalAmount+book.price);    
      setCart((arr) => {
        return [...arr, book];
      });
    }

    setCount(count + 1);
  };
  const addToWishList=(book)=>{
    let index = wishList.findIndex((obj) => obj._id === book._id);
    if (index !== -1) {
    } else {  
      setWishList((arr) => {
        return [...arr, book];
      });
    }


  }
  const products = bookData.map((element, index) => {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Product book={element} key={index} addToCart={addToCart} addToWishList={addToWishList}/>
      </div>
    );
  });
  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog-title">Our Products</h2>
        <div className="row justify-content-center">{products}</div>
      </div>
    </div>
  );
};

export default Catalog;
