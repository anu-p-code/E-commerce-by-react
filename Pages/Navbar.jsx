import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Ensure correct import
import { ShopContext } from '../Context/ShopContextProvider'; // Ensure the correct import
import logo from '../Assets/logo.png'; // Ensure the correct path
import cart_icon from '../Assets/cart_icon.png'; // Ensure the correct path
import './Navbar.css'; // Ensure the CSS file path is correct

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); // Ensure function name matches

  return (
    <div className='navbar'> {/* Ensure class name is consistent */}
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => setMenu("men")}><Link to='/'>Men</Link>{menu === "men" ? <hr /> : null}</li>
        <li onClick={() => setMenu("women")}><Link to='/'>Women</Link>{menu === "women" ? <hr /> : null}</li> {/* Fixed "woman" to "women" */}
        <li onClick={() => setMenu("kids")}><Link to='/'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-counter">{getTotalCartItems()}</div> {/* Ensure function name matches */}
      </div>
    </div>
  );
}

export default Navbar;
