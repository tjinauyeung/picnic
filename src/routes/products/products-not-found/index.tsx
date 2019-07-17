import React from "react";
import "./styles.scss";

const ProductsNotFound = () => (
  <div className="products-not-found">
    <h1 className="products-not-found__icon">🥥</h1>
    <p className="products-not-found__description">
      No products found. Please try a different search.
    </p>
  </div>
);

export default ProductsNotFound;
