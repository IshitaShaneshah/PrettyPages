import React, { useEffect, useState } from "react";
import "../CSS/UserNavbar.css";
import { Link } from "react-router-dom";
import logo from "../photos/logo.png";
const UserNavbar = (props) => {
  const [listItems, setListItem] = useState([]);
  const vendorli = ["Home", "Add Product", "Your Catalog"];
  const userli = ["Home", "Products", "Wishlist", "Cart"];
  let search;
  useEffect(() => {
    console.log(props.user);
    if (props.user === "vendor") setListItem(vendorli);
    else setListItem(userli);
    console.log(listItems);
  }, []);

  useEffect(() => {
    if (props.user === "vendor") console.log();
  }, []);
  const navItems = listItems.map((ele, index) => {
    return (
      <li className="nav-item" key={index}>
        <Link className="nav-link" onClick={() => props.toggleHandler(index)}>
          {ele}
        </Link>
      </li>
    );
  });
  return (
    <>
      <nav className="mynav navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} placeholder="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navItems}
            {
              props.user === "vendor"?<></> :
              <div class="input-group searchinput">
              <input
                type="text"
                class="form-control"
                placeholder="Enter book name"
              />
              <button class="btn" type="button" id="button-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
            }
               
          
            </ul>
            <div className="logout navbar-nav ms-auto">
              <Link className="nav-item" to="/" onClick={props.logoutHandler}>
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
