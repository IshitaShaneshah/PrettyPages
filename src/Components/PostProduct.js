import React, { useState } from "react";
import "../CSS/PostProduct.css";
const PostProduct = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    desc: "",
    quantity: "",
    genre: "non-fiction",
    subgenre: "",
  });
  const fiction = [
    "Fantasy",
    "Adventure",
    "Romance",
    "Contemporary",
    "Dystopian",
    "Mystery",
    "Horror",
    "Thriller",
    "Paranormal",
    "Historical fiction",
    "Science Fiction",
    "Children's",
  ];
  const non_fiction = [
    "Cookbook",
    "Art",
    "Self-help",
    "Motivational",
    "Health",
    "History",
    "Travel",
    "Families & Relationships",
    "Humor",
  ];

  const nonfictiongenreoption = non_fiction.map((ele) => {
    return <option value={ele}>{ele}</option>;
  });
  const fictiongenreoption = fiction.map((ele) => {
    return <option value={ele}>{ele}</option>;
  });
  return (
    <div className="PostProduct">
      <div className="PostProductForm container">
        <form className="row">
          <div className="col-md-12">
            <label for="bimg">Upload Image :</label>
            <input id="bimg" type="file" />
          </div>
          <div className="col-md-5">
            <label for="btitle">Title :</label>
            <input id="btitle" type="text" />
          </div>
          <div className="col-md-5">
            <label for="bauthor">Author :</label>
            <input id="bauthor" type="text" />
          </div>
          <div className="col-md-5">
            <label for="bdesc">Description :</label>
            <textarea id="bdesc" rows="4" cols="50"></textarea>
          </div>
          <div className="col-md-5">
            <label for="bprice">Price :</label>
            <input id="bprice" type="number" />
            <label for="bqty">Quantity :</label>
            <input id="bqty" type="number" />
            <label for="bgenre">Genre :</label>
            <input type="radio" id="fiction" name="genre" value="non-fiction" />
            <label for="fiction">Fiction</label>
            <input
              type="radio"
              id="non-fiction"
              name="genre"
              value="non-fiction"
            />
            <label for="non-fiction">Non-fiction</label>
            <label for="subgenre">Sub Genre :</label>
            {bookDetails.genre === "non-fiction" ? (
              <select id="subgenre">{nonfictiongenreoption}</select>
            ) : (
              <select id="subgenre">{fictiongenreoption}</select>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
