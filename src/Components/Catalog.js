import React, { useEffect, useState } from "react";
import "../CSS/Catalog.css";
import Product from "./Product";
import axios from "axios";
const Catalog = (props) => {
  const [bookData, setBookData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [cartlist, setCartList] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("uemail"));

  useEffect(() => {
    getData();
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v2/bookDisplay"
    );
    setBookData(response.data.message);
  };

  useEffect(() => {
    getWish();
  }, [wishList]);

  useEffect(() => {
    if (wishList.length !== 0) {
      axios.post("http://localhost:3100/api/v1/wishlist/add", {
        user_id: email,
        wishList: wishList,
      });
    }
  }, [wishList]);
  const getWish = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v1/wishlist/display"
    );

    if (response.data.message[0] !== undefined) {
      setList(response.data.message[0].wishList);
    }
    displayWishlist();
  };
  const addToWishList = (book) => {
    let index = wishList.findIndex((obj) => obj._id === book._id);
    console.log(index, "ll");
    if (index !== -1) {
    } else {
      setWishList((arr) => {
        return [...arr, book];
      });
    }
  };
  const displayWishlist = () => {
    // console.log(list);
    list.map((ele) => {
      wishList?.map((ele2) => {
        if (ele2._id !== ele._id) {
          addToWishList(ele);
          // setWishList(list);
        }
      });
    });
  };

  useEffect(() => {
    getCart();
  }, [cart]);
  useEffect(() => {
    // console.log(cart);
    if (cart.length !== 0) {
      axios.post("http://localhost:3100/api/v1/cart/add", {
        user_id: email,
        cart: cart,
      });
    }
  }, [cart]);
  const getCart = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v1/cart/display"
    );
    // console.log(response.data.message);
    if (response.data.message[0] !== undefined) {
      setCartList(response.data.message[0].cart);
    }
    displayCartlist();
  };
  const addToCart = (book) => {
    console.log(book)
    let index = cart.findIndex((obj) => obj._id === book._id);
    if (index !== -1) {
      // setCart(
      //   cart.map((ele) => {
      //     if (ele._id === book._id) {
      //       ele.count += 1;
      //       ele.amount += ele.price;
      //     }
      //     console.log("2",ele);
      //     return ele;
      //   })
      // );
     
      // const arr=cart?.map((ele)=>{
      //   if(ele._id===book._id)
      //   {
      //     ele.count += 1;
      // //       ele.amount += ele.price;
      //   }
      //   return ele;
      // }
      // )
      // setCart(arr);
    } else {
      book.count = 1;
      book.amount = book.price;
      // setTotalAmount(totalAmount + book.price);
      console.log("1",book)
      setCart((arr) => {
        return [...arr, book];
      });
    }

    // // setCount(count + 1);
    // console.log("title", book.title);
    // console.log(cart.includes(book));
    // let index = cart.findIndex((obj) => obj._id === book._id);
    // console.log(index);
    // if (index !== -1) {
    //   // if(cart.includes(book)){
    //   //   console.log("match")
    //   setCart(
    //     cart.map((ele) => {
    //       if (ele._id === book._id) {
    //         ele.count += 1;
    //         ele.amount += ele.price;
    //       }
    //       return ele;
    //     })
    //   );
    // } else {
    //   book.count = 1;
    //   book.amount = book.price;
    //   // setTotalAmount(totalAmount + book.price);
    //   setCart((arr) => {
    //     return [...arr, book];
    //   });
    // }
  };

  const displayCartlist = () => {
    console.log("cart", cart);
    console.log("cartlist", cartlist);
    cartlist.map((book) => [addToCart(book)]);
  };
  const products = bookData.map((element, index) => {
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
  });

  const genreProducts = bookData.map((element, index) => {
    if (props.subGenre === element.sub_genre) {
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
    if (props.search.toLowerCase() === element.title.toLowerCase()) {
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
            props.search
              ? searchProduct
              : props.subGenre
              ? genreProducts
              : products
            // searchProduct
          }
        </div>
      </div>
    </div>
  );
};

export default Catalog;
