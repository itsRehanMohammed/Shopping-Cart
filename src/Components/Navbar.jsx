import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <nav className="navbar-material">
        <div className="logo">
          {" "}
          <h2>Redux Store</h2>{" "}
        </div>
        <div className="pages">
          <Link to="/">
            <div className="nav-home">
              <h3>Home</h3>
            </div>
          </Link>
          <Link to="/cart">
            <div className="nav-cart">
              <h3>Cart</h3>
            </div>
          </Link>
          <div className="nav-cart-item">
            <h3>
              Cart Items: <span> {cartItems.length} </span>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
