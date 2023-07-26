import React from 'react'
import logo from "../photos/logo.png";
import "../CSS/UserNavbar.css";
const Navbar = () => {
  return (
    <nav className="mynav navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} placeholder="logo" />
          </div>
          </div>
      </nav>
  )
}

export default Navbar