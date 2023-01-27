import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const dispath = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleDelete = (item) => {
    dispath(remove(item));
  };
  return (
    <div className="cart">
      {products.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="" />

            <div className="item-name">{item.title}</div>
            <div className="price">${item.price}</div>
            <button onClick={() => handleDelete(item.id)} className="remove-item">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
