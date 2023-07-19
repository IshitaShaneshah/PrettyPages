import React, { useState,useEffect } from "react";
import "../CSS/VendorProduct.css";
import axios from "axios";
const VendorProducts = () => {
  const [book, setBook] = useState([
    // {
    //   title: "The Jungle Book",
    //   author: "XYZ",
    //   genre: "fiction",
    //   pages: 120,
    //   subgenre: "Thriller",
    //   price: 45 + "$",
    //   quantity:12,
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    // },
    // {
    //   title: "Dictionary",
    //   author: "ABC",
    //   genre: "fiction",
    //   pages: 120,
    //   subgenre: "Thriller",
    //   price: 45 + "$",
    //   quantity:30,
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    // },
  ]);
  const getData = async()=>{
    const response = await axios.get("http://localhost:3100/api/v2/catalog")
    setBook(response);
    console.log(response)
    // console.log("hoii")
}
    useEffect(()=>{
      // console.log("hoo")
      getData();
    },[]) 
  // const rowdata = book.map((ele, index) => {
  //   return (
  //     <tr>
  //       <td scope="row"></td>
  //       <td>{ele.title}</td>
  //       <td>{ele.author}</td>
  //       <td>{ele.price}</td>
  //       <td>{ele.genre}</td>
  //       <td>{ele.subgenre}</td>
  //       <td>{ele.quantity}</td>
  //     </tr>
  //   );
  // });
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
          </tr>
        </thead>
        <tbody class="table-group-divider">
            {/* {rowdata} */}
        </tbody>
      </table>
      <div className="button-cls">
      <button className="me-0"><a href="/">Add more books..</a></button>
    </div>
    </div>
  );
};

export default VendorProducts;
