import React, { useEffect, useState, Fragment } from "react";
import { Router, Redirect, Location, navigate } from "@reach/router";
import ProductService from "./services/product-service";
import Products from "./routes/products";
import ProductDetail from "./routes/product-detail";
import Dialog from "./components/dialog";
import Header from "./components/header";
import { Product } from "./models";
import "./App.styles.scss";

const App = () => {
  const productService = new ProductService();
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    productService
      .getProducts()
      .then(filterByQuery(query))
      .then(setProducts);
  }, [query]);

  const filterByQuery = query => products => products.filter(matchesName(query));
  const matchesName = query => ({ name }) => name.toLowerCase().includes(query.toLowerCase());
  const search = e => setQuery(e.target.value);
  const navigateTo = location => e => navigate(location.pathname);

  return (
    <div className="wrapper">
      <Header onSearch={search} />
      <Location>
        {({ location }) => {
          const previousLocation = location.state && location.state.previousLocation;
          return (
            <Fragment>
              <Router location={previousLocation || location}>
                <Redirect from="/" to="/list" noThrow />
                <Products path="/list" products={products} />
                <ProductDetail path="/:id/detail" />
              </Router>
              <Dialog isOpen={previousLocation} onClose={navigateTo(previousLocation)}>
                <Router location={location}>
                  <ProductDetail path="/:id/detail" />
                </Router>
              </Dialog>
            </Fragment>
          );
        }}
      </Location>
    </div>
  );
};

export default App;
