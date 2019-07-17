import React from "react";
import { Link } from "@reach/router";
import Header from "../../../components/header";
import { ArrowBack } from "../../../icons";
import "./styles.scss";

const ProductDetailHeader = () => (
  <Header className="product-detail-header">
    <Link to="/list" className="product-detail-header__link">
      <ArrowBack />
      <span>Back to product list</span>
    </Link>
  </Header>
);

export default ProductDetailHeader;
