import React, { useState } from "react";
import "../CSS/WishList.css";
const WishList = () => {
  const [wishList, setWishList] = useState([
    {
      title: "The Jungle Book",
      author: "XYZ",
      genre: "fiction",
      pages: 120,
      subgenre: "Thriller",
      price: 45 + "$",
      quantity:12,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    },
    {
      title: "Dictionary",
      author: "ABC",
      genre: "fiction",
      pages: 120,
      subgenre: "Thriller",
      price: 45 + "$",
      quantity:30,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
    },
  ]);
  const wishrow=wishList.map((ele,index)=>{
    return(
      <>
        <tr>
            <th scope="row">1</th>
            <td className="book-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&usqp=CAU"/>
            </td>
            <td>
              <ol>
                <li><span>Title :</span></li>
              </ol>
            </td>
            <td>@mdo</td>
          </tr>
      </>
    )
  })
  return (
    <div className="wishlist container">
      <div className="heading">
        Your Wishlist
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bag-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
        </svg>
      </div>
      <table class="table ">
        <thead>
          <tr className="table-dark">
            <th scope="col">Sno.</th>
            <th scope="col">Book</th>
            <th scope="col">Book Details</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td className="book-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&usqp=CAU"/>
            </td>
            <td>
              <ol>
                <li><span>Title :</span></li>
              </ol>
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WishList;
