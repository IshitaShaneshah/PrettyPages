import React from "react";
import "../CSS/BookInfo.css";
import openbook from "../photos/openbook.jpg";
import book1 from "../photos/book1.jpeg";
const BookInfo = (props) => {
  // const book = {
  //   title: "The Jungle Book",
  //   author: "XYZ",
  //   category: "fiction",
  //   pages: 120,
  //   genre: "Thriller",
  //   price: 45 + "$",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
  // };
  console.log(props.bookinfo)
  return (
    <div className="container-fluid bookinfo">
      <div className="book">
        <div className="page">
          <div className="content">
          <div className="desc"><span>Description :</span>{props.bookinfo.description}</div>
          </div>
          <img className="book-cover" src={book1} />
        </div>
        <div className="page-2">
          <div className="page2-text">
          <div className="title">{props.bookinfo.title}</div>
            <div className="author">By - {props.bookinfo.author_name}</div>
            <div className="pages"><span>Pages :</span> {props.bookinfo.pages}</div>
            <div className="genre"><span>Genre :</span>{props.bookinfo.sub_genre}</div>
            <div className="category"><span>Category :</span> {props.bookinfo.Genre}</div>
            <div className="price"><span>Price :</span>{props.bookinfo.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
