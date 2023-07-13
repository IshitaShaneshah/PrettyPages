import React from 'react'

const Product = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU" alt="The jungle Book"/>
      <div className='book-title'>Title : The Jungle Book</div>
      <div className='book-author'>Author : XYZ</div>
      <div className='book-price'>Price : 45$</div>
      <div className='book-btn'>
        <button>Cart</button>
        <button>WishList</button>
      </div>
    </div>
  )
}

export default Product