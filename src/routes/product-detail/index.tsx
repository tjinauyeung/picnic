import React, { useEffect, useState } from "react";
import ProductService from "../../services/product-service";
import Price from "../../components/price";
import Loader from "../../components/loader";
import ProductDetailHeader from "./product-detail-header";
import "./styles.scss";

const PRODUCT_DETAIL_DEFAULT = {
  product_id: "",
  name: "",
  image: "",
  price: null,
  description: ""
};

const ProductDetail = props => {
  const productService = new ProductService();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(PRODUCT_DETAIL_DEFAULT);

  useEffect(() => {
    productService
      .getProduct(props.id)
      .then(setProduct)
      .finally(() => setTimeout(() => setLoading(false), 800)); // delay for effect
  }, [props.id]);

  if (loading) return <Loader />;

  return [
    <ProductDetailHeader key="1" />,
    <div className="product-detail" key="2">
      <h1 className="product-detail__title">{product.name}</h1>
      <img className="product-detail__image" src={product.image} />
      <p className="product-detail__paragraph">{product.description}</p>
      <Price className="product-detail__price" price={product.price} />
    </div>
  ];
};

export default ProductDetail;
