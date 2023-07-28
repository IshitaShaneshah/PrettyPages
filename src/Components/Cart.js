import React, { useState,useEffect } from "react";
import axios from "axios";
import "../CSS/WishList.css"
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(()=>{
    getCart();
  },[])
  const getCart = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v1/cart/display"
    );
    // if(response.data.message[0].cart!==undefined)
   setCartList(response.data.message[0].cart);
     
  };

  const wishrow = cartList?.map((ele, index) => {
  
    return (
      <>
        <tr>
          <td scope="row"></td>
          <td className="book-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&usqp=CAU" />
          </td>
          <td>
            <ul>
              <li>
                <span>Title :{ele.title}</span>
              </li>
              <li>
                <span>Author :{ele.author_name}</span>
              </li>
              <li>
                <span>Pages :{ele.pages}</span>
              </li>
              <li>
                <span>Category :{ele.Genre}</span>
              </li>
              <li>
                <span>Genre :{ele.sub_genre}</span>
              </li>
              <li>
                <span>Price :{ele.price}</span>
              </li>
            </ul>
          </td>
          <td>
          <div className="wishlist-btn">
              <div className="counter-btn">
                <button>+</button>
                <span>{ele.count}</span>
                <button>-</button>
              </div>
              </div>
          </td>
          <td>{ele.amount}</td>
          <td>
            <div className="wishlist-btn">
              <button>Remove</button>
            </div>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div className="wishlist container">
      <div className="heading">
        Your Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </div>
      <table class="table ">
        <thead>
          <tr className="table-head-col">
            <th scope="col">Sno.</th>
            <th scope="col">Book</th>
            <th scope="col">Book Details</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {
            // cartList.length===0?
            // <tr>
            //   <td colSpan="6">Cart is Empty</td>
            // </tr>
            // :
            wishrow
          }
          </tbody>
      </table>
    </div>
  );
};
export default Cart;
