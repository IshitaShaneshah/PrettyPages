import React, { useState } from "react";
import "../CSS/PostProduct.css";
import uploadbook from "../photos/bookupload.svg";
const PostProduct = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    desc: "",
    quantity: "",
    genre: "fiction",
    subgenre: "",
  });
  const [uploadBook, setUploadBook] = useState("");

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please Choose a file");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const imageHandler = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setUploadBook(base64);
    event.target.value = "";
  };
  return (
    <div className="postProduct">
      <div className="postProductForm container">
        <h2 className="heading">Add Product </h2>
        <form className="row justify-content-center">
          <div className="col-md-6 col-sm-6 section1 ">
            <div className="productFields">
              <p className="my-1">Choose a file to upload book picture</p>
              <label className="choosefile" for="bimg">
                Upload Image
              </label>
              <input
                id="bimg"
                type="file"
                accept="image/*,png,jpg,jpeg"
                onChange={imageHandler}
              />
            </div>
            <div className="productFields">
              <label for="btitle">Title :</label>
              <br />
              <input id="btitle" type="text" />
            </div>
            <div className="productFields">
              <label for="bauthor">Author :</label>
              <br />
              <input id="bauthor" type="text" />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 uploadimg py-3">
            <img src={uploadBook} alt="upload image" />
          </div>
          <div className="col-md-6 section2">
            <div className="productFields">
              <label for="bdesc">Description :</label>
              <br />
              <textarea id="bdesc" rows="4"></textarea>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="productFields col-md-6 col-sm-12">
                  <label for="bgenre">Genre :</label>
                  <br />
                  <input
                    type="radio"
                    className="radio-btn"
                    id="fiction"
                    name="genre"
                    value="non-fiction"
                  />
                  <label for="fiction">Fiction</label>
                  <input
                    type="radio"
                    className="radio-btn"
                    id="non-fiction"
                    name="genre"
                    value="non-fiction"
                  />
                  <label for="non-fiction">Non-fiction</label>
                </div>
                <div className="productFields col-md-5 col-sm-12">
                  
                  {bookDetails.genre === "non-fiction" ? (
                    <>
                    <label for="subgenre">Sub Genre :</label>
                    <br />
                    <select id="subgenre">
                      <option disabled>--select--</option>
                      {nonfictiongenreoption}
                      </select>
                      </>
                  ) : bookDetails.genre === "fiction" ?(
                    <>
                    <label for="subgenre">Sub Genre :</label>
                    <br />
                    <select id="subgenre">{fictiongenreoption}</select>
                    </>
                  ):<></>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 section3">
            <div className="productFields">
              <label for="bprice">Price :</label>
              <br />
              <input id="bprice" type="number" />
            </div>
            <div className="productFields">
              <label for="bqty">Quantity :</label>
              <br />
              <input id="bqty" type="number" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
