import React from "react";
import "../CSS/BookDetail.css";
// import Temp from './Temp'
import bookside from "../photos/book-side.jpg";
const BookDetail = () => {
  const book={
    title:"The Jungle Book",
    author : "XYZ",
    category:"fiction",
    pages:120,
    genre : "Thriller",
    price : 45+"$",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in."
  }
  return (
    <div className="book-detail">
      <div className="book-container">
        {/* <div className="book-coverbg"> */}
          <div className="book-cover">
            <img className="book-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"/>
            <img className="book-side" src={bookside} />
          </div>
        {/* </div> */}
        
      
      <div className="preface">
          <div className="content">
            <div className="header">
              <div className="title">{book.title}</div>
              <div className="icon"></div>
            </div>
            <div className="author">{book.author}</div>
            <div className="pages">{book.pages}</div>
            <div className="category">{book.category}</div>
            <div className="genre">{book.genre}</div>
            <div className="desc">{book.desc}</div>
            <div className="price">{book.price}</div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default BookDetail;
