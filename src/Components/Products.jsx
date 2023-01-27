import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, STATUSES } from "../Store/productSlice";

const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const { data, status } = useSelector((state) => state.product);
  useEffect(() => {
    // dispatch(fetchProducts());
    const fetchProducts = async () => {
      const products = await fetch("https://fakestoreapi.com/products");
      const res = await products.json();
      setData(res);
    };
    fetchProducts();
  }, []);

  const handleClick = (item) => {
    dispatch(add(item));
  };
  return (
    <div className="products">
      <h1>Store</h1>
      <div className="products-wrapper">
        {data.map((item) => {
          return (
            <div className="product" key={item.id}>
              <img src={item.image} alt={item.title} className="product-image" />
              <h4 className="product-name">{item.title}</h4>
              <div className="product-footer">
                <h4>${item.price}</h4>
                <input onClick={() => handleClick(item)} type="button" value="Add To Cart" className="cart-btn" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
