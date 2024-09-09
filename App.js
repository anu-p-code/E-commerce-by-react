import React from 'react';
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer'; // Fixed incorrect path
import banner_mens from './Components/Assets/banner_mens.png'; // Fixed incorrect path
import banner_womens from './Components/Assets/banner_womens.png'; // Typo fixed in path (Assets)
import banner_kids from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={banner_mens} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={banner_womens} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kids" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Fixed dynamic route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
