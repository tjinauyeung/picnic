import React from "react";
import Price from "../../../components/price";
import "./styles.scss";

const Product = ({ className, product, onClick }) => (
  <div className={className} style={{ backgroundImage: `url(${product.image})` }} onClick={onClick}>
    <h2 className="product__name">{product.name}</h2>
    <Price className="product__price" price={product.price} />
  </div>
);

export default Product;
