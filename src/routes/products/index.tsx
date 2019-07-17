import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import utils from "../../utils";
import ProductsNotFound from "./products-not-found";
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
    return <ProductsNotFound />;
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
