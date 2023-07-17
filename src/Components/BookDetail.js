import React from "react";
import "../CSS/BookDetail.css";
// import Temp from './Temp'
import bookside from "../photos/book-side.jpg";
const BookDetail = () => {
  return (
    <div className="book-detail">
      <div className="book-container">
        <div className="book-coverbg">
          <div className="book-cover">
            <img className="book-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"/>
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="preface">
          <div className="content">
            <div className="header">
              <div className="title">hello</div>
              <div className="icon"></div>
            </div>
            <div className="author"></div>
            <div className="pages"></div>
            <div className="category"></div>
            <div className="genre"></div>
            <div className="desc"></div>
            <div className="price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
