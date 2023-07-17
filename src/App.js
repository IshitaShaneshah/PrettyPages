import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import  Login from './Components/Login';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Temp from './Components/Temp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
