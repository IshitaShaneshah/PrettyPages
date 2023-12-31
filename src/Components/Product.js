import React, { useEffect, useState } from "react";
import "../CSS/Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="product">
      <div className="product-box">
        <div className="product-card">
          <div className="product-front">
            <img
              className="book-img"
              src={props.book.image}
              alt={props.book.title}
            />
          </div>
          <div className="product-back">
            <div className="book-title"><span>Title :</span> {props.book.title}</div>
            <div className="book-author"><span>Author :</span> {props.book.author_name}</div>
            <div className="book-subgenre"><span>Genre :</span> {props.book.Genre}</div>
            {/* <div className="book-desc">Desc : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.</div> */}
            <div className="book-price"><span>Price :</span> {props.book.price}</div>
            <Link className="know-more" onClick={()=>{props.toggleHandler(4); props.displaybook(props.book)}}>Know more...</Link>
          </div>
        </div>
        <div className="book-title2 my-2">{props.book.title}</div>
        <div className="book-price2"><span>Price : </span>{props.book.price} Rs.</div>
      </div>
      <div className="book-btn">
          <button onClick={()=>props.addToCart(props.book)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <button onClick={()=>props.addToWishList(props.book)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
          </button> 
          </div>
    </div>
  );
};

export default Product;
