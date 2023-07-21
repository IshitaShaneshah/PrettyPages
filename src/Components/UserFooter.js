import React, { useEffect, useState } from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
const UserFooter = (props) => {
  const [listItems, setListItem] = useState([]);
  const vendorli = ["Home", "Add Product", "Your Catalog"];
  const userli = ["Home", "Products", "Wishlist", "Cart"];

  useEffect(() => {
    if (props.user === "vendor") setListItem(vendorli);
    else setListItem(userli);
    console.log(listItems);
  }, []);
  const footerItems = listItems.map((ele, index) => {
    return (
      <li className="" key={index}>
        <Link className="" onClick={() => props.toggleHandler(index)}>
          {ele}
        </Link>
      </li>
    );
  });
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col">
          <div className="info">
            <h1 className="heading">Pretty Pages</h1>
            <p>
              Pretty pages is a user-friendly online bookstore. It provides user
              with many different books to take the look from and to purchase
              some. It gives various vendors the chance to promote their small
              bookstores and to increase the renvenue earned. The user will also
              be able to keep their wishlist and they can keep track of it.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="QuickLinksBlock">
            <h2 className="heading">Quick Links</h2>
            <ul>
              {/* <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/wishlist">WishList</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li> */}
              {footerItems}
              <li>
                <Link className="nav-item" to="/" onClick={props.logoutHandler}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="ContactUsBlock">
            <h2 className="heading">Contact Us</h2>
            <ul>
              <li>
                <a href="mailto:ishaneshah@argusoft.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                abc@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Argusoft/@23.2417333,72.6252082,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2bf0022b4609:0x4ecd09a1a9d956eb!8m2!3d23.2417333!4d72.6273969!16s%2Fg%2F1tl4bf9s?entry=ttu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Argusoft,Ghandhinagar
                </a>
              </li>
              <li>
              <a href="tel:+91 8824827401">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                +91 999999999
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
