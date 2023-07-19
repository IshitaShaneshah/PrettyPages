import React, { useEffect, useState } from "react";
import "../CSS/Catalog.css";
import Product from "./Product";
import axios from "axios";
const Catalog = () => {
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
  },[]);
  const products=bookData.map((element, index) => {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Product book={element} key={index}/>
      </div>
    );
  });
  return (
    <div className="catalog">
      <div className="container">
        <h2 className="catalog-title">Our Products</h2>
        <div className="row justify-content-center">
            {products}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
