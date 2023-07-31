import React from "react";
import "../CSS/Users.css";
import carousel2 from "../photos/carousel.png"
import carousel1 from "../photos/carousel1.jpg";
import carousel3 from "../photos/carousel3.gif";
import { Link } from "react-router-dom";
import pic from "../photos/bookreader.jpg";
import buyer from "../photos/buyer.avif"
import vendor from "../photos/vendor.jpg";
import introBg from "../photos/introBg.gif"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
const Users = () => {
  return (
    <>
    <Navbar/>
    <div className="container firstPage">
      {/* intro */}
      <div className="intro row justify-content-center">
        <div className="col-md-6 intro-content">
          <div className="intro-text">
            <h2>Pretty Pages</h2>
            <p>
            Pretty pages is a user-friendly online bookstore. It provides user with many different books to take the look from and to purchase some. It gives various vendors the chance to promote their small bookstores and to increase the renvenue earned. The user will also be able to keep their wishlist and they can keep track of it.
            </p>
          </div>
        </div>
        <div className="col-md-6 intro-content">
          <div className="intro-img">
            <img src={introBg} alt="intro_bg"/>
          </div>
        </div>
      </div>
      {/* users */}
      <div className="users container">
        <div className="row justify-content-around">
          <h3>Choose User</h3>
          <div className="col-md-4">
            <Link to="/user">
              <div className="user-box">
                <img src={buyer} alt="Buyer" />
                <p>Buyer</p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/vendor">
              <div className="user-box">
                <img src={vendor} alt="Vendor"/>
                <p>Vendor</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* query box */}
      <Contact/>
    </div>
    <Footer/>
    </>
  );
};

export default Users;
