import React from 'react'
import "../CSS/Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Pretty Paper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">WishList</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Cart</a>
        </li>
      </ul>
      <div className='navbar-nav ms-auto'>
          <button className="nav-item" href="/">Login</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar