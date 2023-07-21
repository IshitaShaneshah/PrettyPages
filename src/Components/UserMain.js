import React from 'react'

const UserMain = () => {
  return (
    <div className='buyerMain'>
      <div className="container">
      <div className="buyerHomeIntro row">
          <div className="col-md-7">
            <h2 className="heading">Sell Books Online</h2>
            <p className="content-intro">
              If you are a book-seller, here is your chance to reach crores of
              customers across India by selling on Pretty Pages.
            </p>
            <button className="buyerHome-btn">Start selling</button>
          </div>
          <div className="col-md-5 sell-book-img">
            {/* <img src={sellbook} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMain