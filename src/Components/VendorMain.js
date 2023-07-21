import React from "react";
import "../CSS/VendorMain.css";
import sellbook from "../photos/sellbooks.jpeg";
import feature1 from "../photos/feature1.png";
import feature2 from "../photos/feature2.png";
import feature3 from "../photos/feature3.png";
import feature4 from "../photos/feature4.png";
import { Link } from "react-router-dom";
const VendorMain = () => {
  return (
    <div className="vendorHome">
      {/* vendor Intro */}
      <div className="container">
        <div className="vendorHomeIntro row">
          <div className="col-md-7">
            <h2 className="heading">Sell Books Online</h2>
            <p className="content-intro">
              If you are a book-seller, here is your chance to reach crores of
              customers across India by selling on Pretty Pages.
            </p>
            <button className="vendorHome-btn">Start selling</button>
          </div>
          <div className="col-md-5 sell-book-img">
            <img src={sellbook} />
          </div>
        </div>

        {/* vendor features */}
        <div className="vendorFeatures row justify-content-around">
          <h2 className="heading my-3">Why Suppliers use Pretty Pages ?</h2>
          <div className="col-lg-3 my-2 col-md-5">
            <div className="feature-card">
              <img src={feature1} />
              <p>0% Commission Fee</p>
            </div>
          </div>
          <div className="col-lg-3 my-2 col-md-5">
            <div className="feature-card">
              <img src={feature2} />
              <p>Growth for every supplier</p>
            </div>
          </div>
          <div className="col-lg-3 my-2 col-md-5">
            <div className="feature-card">
              <img src={feature3} />
              <p>Ease of doing buisness</p>
            </div>
          </div>
          <div className="col-lg-3 my-2 col-md-5">
            <div className="feature-card">
              <img src={feature4} />
              <p>0 Penalty Charges</p>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="vendorServices container-fluid">
        <h2 className="heading">Services</h2>
        <div className="row justify-content-evenly">
          <div className="col-md-2">
            <Link to="/">
              <div className="service">Add Product</div>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/">
              <div className="service">Your Catalog</div>
            </Link>
          </div>
        </div>
      </div>
      {/* how it works */}
      <div className="vendorHowItWorks container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="heading">How It Works?</h2>
            <div className="how-it-work-box col-lg-3 col-md-5">
              <p>Create Account</p>
              <div className="roadmap">1</div>
            </div>
            <div className="how-it-work-box col-lg-3 col-md-5">
              <p>List Products</p>
              <div className="roadmap">2</div>
            </div>
            <div className="how-it-work-box col-lg-3 col-md-5">
              <p>Get Orders</p>
              <div className="roadmap">3</div>
            </div>
            <div className="how-it-work-box col-lg-3 col-md-5">
              <p>Recieve Payments</p>
              <div className="roadmap">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMain;
