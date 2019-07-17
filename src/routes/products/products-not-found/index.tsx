import React from "react";
import "./styles.scss";

const ProductsNotFound = ({ text }) => (
  <div className="not-found">
    <h1 className="not-found__icon">🥥</h1>
    <p className="not-found__description">No products found. Please try a different search.</p>
  </div>
);

export default ProductsNotFound;
