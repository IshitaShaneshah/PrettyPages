import React, { useState,useEffect } from "react";
import "../CSS/VendorProduct.css";
import { Link } from "react-router-dom";
const VendorProducts = (props) => {
    
  const rowdata = props.book?.map((ele, index) => {
    return (
      <tr>
        <td scope="row"></td>
        <td>{ele.title}</td>
        <td>{ele.author_name}</td>
        <td>{ele.price}</td>
        <td>{ele.Genre}</td>
        <td>{ele.sub_genre}</td>
        <td>{ele.quantity}</td>
        <td>
          <button className="deletebtn" onClick={()=>props.deleteHandler(ele)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="vendorProducts container-fluid">
      <div className="heading">Your Catalog</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Genre</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
            {rowdata}
        </tbody>
      </table>
      <div className="button-cls">
      <button className="me-0"><Link onClick={() => props.toggleHandler(1)}>Add more books..</Link></button>
    </div>
    </div>
  );
};

export default VendorProducts;
