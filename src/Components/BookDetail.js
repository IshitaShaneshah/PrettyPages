import "../CSS/BookDetail.css";
import React, { useEffect, useState } from "react";
// import Temp from './Temp'
import bookside from "../photos/book-side.jpg";
import axios from "axios";
const BookDetail = () => {
  const [bookData, setBookData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v2/bookDisplay"
    );
    setBookData(response.data.message);
  };
  useEffect(() => {
    getData();
    getData();
    
  }, []);
  const newarrival= bookData.map((ele,index)=>{
    if(index<bookData.length && index>=bookData.length-6)
    { 
      // console.log(ele,"index",index);
      return(<div className="col-lg-2 col-md-4 col-sm-6 my-2">
        <div className="book-cover">
          <img
            className="book-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
          />
          <img className="book-side" src={bookside} />
          </div>
      </div>
    )
    }
  })
  return (
    <div className="book-detail container">
      <div className="heading">New Arrivals</div>
      <div className="book-container row">
        {/* <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 my-2">
          <div className="book-cover">
            <img
              className="book-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGVLNKbby0qadXZY0Xt_5Xb9ZLaWSpvpEEw&usqp=CAU"
            />
            <img className="book-side" src={bookside} />
          </div>
        </div> */}
        {newarrival}
        {/* </div> */}
        {/* <div className="preface col-md-6">
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
        </div> */}
      </div>
    </div>
    //   <div className="book-detail container-fluid">
    //     <div className="book-container row">
    //       <div className="book-cover col-md-6">
    //         1
    //       </div>
    //       <div className="preface col-md-6">
    //       <div className="content">
    //            <div className="title">{book.title}</div>
    //            <div className="author">By - {book.author}</div>
    //            <div className="pages">{book.pages}</div>
    //            <div className="category">{book.category}</div>
    //            <div className="genre">{book.genre}</div>
    //            <div className="desc">{book.desc}</div>
    //            <div className="price">{book.price}</div>
    //          </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default BookDetail;
