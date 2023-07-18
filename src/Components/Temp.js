import React from "react";
import "../CSS/Temp.css";
import openbook from "../photos/openbook.jpg";
import book1 from "../photos/book1.jpeg";
const Temp = () => {
  const book = {
    title: "The Jungle Book",
    author: "XYZ",
    category: "fiction",
    pages: 120,
    genre: "Thriller",
    price: 45 + "$",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
  };
  return (
    <div className="container-fluid bookinfo">
      <div className="book">
        <div className="page">
          <div className="content">
          <div className="desc"><span>Description :</span>{book.desc}</div>
          </div>
          <img className="book-cover" src={book1} />
        </div>
        <div className="page-2">
          <div className="page2-text">
          <div className="title">{book.title}</div>
            <div className="author">By - {book.author}</div>
            <div className="pages"><span>Pages :</span> {book.pages}</div>
            <div className="genre"><span>Genre :</span>{book.genre}</div>
            <div className="category"><span>Category :</span> {book.category}</div>
            <div className="price"><span>Price :</span>{book.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
