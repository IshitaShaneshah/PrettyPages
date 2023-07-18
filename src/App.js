import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import  Login from './Components/Login';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Temp from './Components/BookInfo';
import PostProduct from './Components/PostProduct'
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/postproduct" element={<PostProduct/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
