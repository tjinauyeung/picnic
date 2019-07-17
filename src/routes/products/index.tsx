import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import utils from "../../utils";
import Product from "./product";
import { IProduct } from "../../models";
import "./styles.scss";

interface ProductsProps extends RouteComponentProps {
  products: IProduct[];
}

function isMobileDevice() {
  return window.innerWidth < 550;
}

const Products = ({ products, location }: ProductsProps) => {
  const handleClick = productId => e => {
    const previousLocation = utils.deepCopy(location);
    const state = { previousLocation };
    navigate(`/${productId}/detail`, isMobileDevice() ? {} : { state });
  };

  if (!products.length) {
    return <div className="products__empty">No products found. Please try different search.</div>;
  }

  return (
    <div className="products">
      {products.map(product => (
        <Product
          key={product.product_id}
          className="product"
          product={product}
          onClick={handleClick(product.product_id)}
        />
      ))}
    </div>
  );
};

export default Products;
