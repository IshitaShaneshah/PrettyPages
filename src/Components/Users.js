import React from "react";
import "../CSS/Users.css";
import carousel2 from "../photos/carousel2.jpg";
import carousel1 from "../photos/carousel1.jpg";
import carousel3 from "../photos/carousel3.gif";
import { Link } from "react-router-dom";
import pic from "../photos/bookreader.jpg";
import buyer from "../photos/buyer.avif"
import vendor from "../photos/vendor.jpg";
const Users = () => {
  return (
    <div className="container-fluid firstPage">
      {/* carousel */}
      {/* <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item .carousel-images active">
            <img src={pic} class="d-block" alt="..." />
          </div>
          <div class="carousel-item .carousel-images">
            <img src="https://picsum.photos/200/300?random=2" class="d-block" alt="..." />
          </div>
          <div class="carousel-item .carousel-images">
            <img src="https://picsum.photos/200/300?random=3" class="d-block" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* users */}
      <div className="users container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/user">
              <div className="user-box">
                <img src={buyer} alt="Buyer" />
                <p>Buyer</p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/vendor">
              <div className="user-box">
                <img src={vendor} alt="Vendor"/>
                <p>Vendor</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
