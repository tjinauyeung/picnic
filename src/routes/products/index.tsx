import React from "react";
import { RouteComponentProps, navigate, NavigateOptions } from "@reach/router";
import utils from "../../utils";
import ProductsNotFound from "./products-not-found";
import Product from "./product";
import { IProduct } from "../../models";
import "./styles.scss";

interface ProductsProps extends RouteComponentProps {
  products: IProduct[];
}

const Products = ({ products, location }: ProductsProps) => {
  const handleClick = productId => e => {
    let options: NavigateOptions<{}> = {};
    // on mobile we'll navigate to detail view without opening the dialog
    // by sending state to the router it knows to use the dialog or go directly to the view
    if (!utils.isMobile()) {
      const previousLocation = utils.deepCopy(location);
      options.state = { previousLocation };
    }
    navigate(`/${productId}/detail`, options);
  };

  if (!products.length) return <ProductsNotFound />;

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
