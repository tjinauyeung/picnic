import React from "react";
import Price from "../../../components/price";

const Product = ({ product, onClick, className }) => (
  <div className={className} style={{ backgroundImage: `url(${product.image})` }} onClick={onClick}>
    <h2 className="product__name">{product.name}</h2>
    <Price className="product__price" price={product.price} />
  </div>
);

export default Product;
