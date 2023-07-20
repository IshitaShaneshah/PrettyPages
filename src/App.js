import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login from './Components/VendorLogin';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import BookInfo from './Components/BookInfo';
import PostProduct from './Components/PostProduct'
import Register from './Components/VendorRegister';
import Users from './Components/Users';
import UserLogin from "./Components/UserLogin";
import VendorLogin from "./Components/VendorLogin";
import UserRegister from "./Components/UserRegister";
import VendorRegister from "./Components/VendorRegister";
import VendorHome from './Components/VendorHome';
import UserHome from "./Components/UserHome";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/user" element={<UserLogin/>}/>
      <Route path="/vendor" element={<VendorLogin/>}/>
      <Route path="/user/userregister" element={<UserRegister/>}/>
      <Route path="/vendor/vendorregister" element={<VendorRegister/>}/>
        {/* <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/postproduct" element={<PostProduct/>} />
        <Route path="/productDetails" element={<BookInfo/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
