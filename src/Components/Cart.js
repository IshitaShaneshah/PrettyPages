import React, { useState } from "react";
import "../CSS/WishList.css"
const Cart = () => {
  const [cartList, setCartList] = useState([
    {
      title: "The Jungle Book",
      author: "XYZ",
      genre: "fiction",
      pages: 120,
      subgenre: "Thriller",
      price: 45 + "$",
      quantity: 12,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    },
    {
      title: "Dictionary",
      author: "ABC",
      genre: "fiction",
      pages: 120,
      subgenre: "Thriller",
      price: 45 + "$",
      quantity: 30,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    },
  ]);
  const wishrow = cartList.map((ele, index) => {
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
                <span>Author :{ele.author}</span>
              </li>
              <li>
                <span>Pages :{ele.pages}</span>
              </li>
              <li>
                <span>Category :{ele.genre}</span>
              </li>
              <li>
                <span>Genre :{ele.subgenre}</span>
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
                <span>22</span>
                <button>-</button>
              </div>
              </div>
          </td>
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
          <tr className="table-dark">
            <th scope="col">Sno.</th>
            <th scope="col">Book</th>
            <th scope="col">Book Details</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">{wishrow}</tbody>
      </table>
    </div>
  );
};
export default Cart;
