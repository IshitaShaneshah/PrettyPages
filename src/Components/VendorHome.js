import React from "react";
import "../CSS/VendorHome.css";
import sellbook from "../photos/sellbooks.jpeg";
import feature1 from "../photos/feature1.jpg"
import feature2 from "../photos/feature2.png"
import feature3 from "../photos/feature3.png"
import feature4 from "../photos/feature4.jpg"
const VendorHome = () => {
  return (
    <div className="vendorHome container">
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
      <div className="vendorFeatures row">
        <div className="col-md-3">
          <div className="feature-card">
            <img src={feature1}/>
            <p>
                0% Commission Fee
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-card">
          <img src={feature2}/>
            <p>
                Growth for every supplier
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-card">
          <img src={feature3}/>
            <p>
                Ease of doing buisness
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature-card">
          <img src={feature4}/>
            <p>
                0 Penalty Charges
            </p>
          </div>
        </div>
      </div>
      <div className="vendorHowItWorks row">
        
      </div>
    </div>
  );
};

export default VendorHome;
