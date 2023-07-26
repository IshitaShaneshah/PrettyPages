import React, { useEffect, useState } from "react";
import "../CSS/Catalog.css";
import Product from "./Product";
import axios from "axios";
const Catalog = (props) => {
  const [bookData, setBookData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [count, setCount] = useState(0);
  // const [amount,setAmount]=useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("uemail"));
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
  const getWish = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v1/wishlist/display"
    );
    console.log(response.data.message);
  };
  useEffect(() => {
    getWish();
  });
  useEffect(() => {
    console.log(wishList);
    console.log(email);
    if (wishList.length !== 0) {
      axios.post("http://localhost:3100/api/v1/wishlist/add", {
        user_id: email,
        wishList: wishList,
      });
    }
  }, [wishList]);
  useEffect(() => {
    console.log(cart);
    if (cart !== 0) {
      axios.post("http://localhost:3100/api/v1/cart/add", {
        user_id: email,
        cart: cart,
      });
    }
  }, [cart]);

  const getCart = async () => {
    const response =await axios.get("http://localhost:3100/api/v1/wishlist/display");
    console.log(response.data.message);
  };

  useEffect(() => {
    getCart();
  });

  const addToCart = (book) => {
    let index = cart.findIndex((obj) => obj._id === book._id);
    if (index !== -1) {
      cart[index].count += 1;
      setTotalAmount(totalAmount + book.price);
      book.amount += book.price;
    } else {
      book.count = 1;
      book.amount = book.price;
      setTotalAmount(totalAmount + book.price);
      setCart((arr) => {
        return [...arr, book];
      });
    }

    setCount(count + 1);
  };
  const addToWishList = (book) => {
    let index = wishList.findIndex((obj) => obj._id === book._id);
    if (index !== -1) {
    } else {
      setWishList((arr) => {
        return [...arr, book];
      });
    }
  };
  const products = bookData.map((element, index) => {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Product book={element} key={index} addToCart={addToCart} addToWishList={addToWishList} toggleHandler={props.toggleHandler} displaybook={props.displaybook}/>
      </div>
    );
  });
  const genreProducts = bookData.map((element, index) => {
    // console.log("1",props.subGenre);
    // console.log("2",element.sub_genre);
    if (props.subGenre === element.sub_genre) {
      console.log(element);
      return (
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <Product
            book={element}
            key={index}
            addToCart={addToCart}
            addToWishList={addToWishList}
            toggleHandler={props.toggleHandler}
            displaybook={props.displaybook}
          />
        </div>
      );
    }
  });
  const searchProduct = bookData.map((element, index) => {
    // console.log("1",props.subGenre);
    // console.log("2",element.sub_genre);
    if (props.search.toLowerCase() === element.title.toLowerCase()) {
      console.log(element);
      return (
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <Product
            book={element}
            key={index}
            addToCart={addToCart}
            addToWishList={addToWishList}
            toggleHandler={props.toggleHandler}
            displaybook={props.displaybook}
          />
        </div>
      );
    }
  });
  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog-title">Our Products</h2>
        <div className="row justify-content-center">
          {
            props.subGenre ? genreProducts : products
            // searchProduct
          }
        </div>
      </div>
    </div>
  );
};

export default Catalog;
