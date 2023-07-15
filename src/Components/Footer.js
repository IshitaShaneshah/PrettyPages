import React from 'react'
import "../CSS/Footer.css"
const Footer = () => {
  return (
    <div className='footer container-fluid'>
        <div className='row'>
            <div className='col'>
              <div className='QuickLinksBlock'>
                <h2 className='heading'>
                  Quick Links
                </h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/wishlist">WishList</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </div>
            </div>
            <div className='col'>

            </div>
            <div className='col'>

            </div>
        </div>
    </div>
  )
}

export default Footer