import React, { useEffect, useState, Fragment } from "react";
import { Router, Redirect, Location, navigate } from "@reach/router";
import ProductService from "./services/product-service";
import SearchService from "./services/search-service";
import Products from "./routes/products";
import ProductDetail from "./routes/product-detail";
import Dialog from "./components/dialog";
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import { IProduct } from "./models";
import "./App.styles.scss";

const App = () => {
  const productService = new ProductService();
  const searchService = new SearchService();

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filtered, setFiltered] = useState<IProduct[]>([]);

  useEffect(() => {
    productService.getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    searchService.searchProducts(products, query).then(setFiltered);
  }, [query, products]);

  const search = e => setQuery(e.target.value);
  const navigateTo = location => e => navigate(location.pathname);

  return (
    <div className="wrapper">
      <Header>
        <SearchBar onChange={search} />
      </Header>
      <Location>
        {({ location }) => {
          const previousLocation = location.state && location.state.previousLocation;
          return (
            <Fragment>
              <Router location={previousLocation || location}>
                <Redirect from="/" to="/list" noThrow />
                <Products path="/list" products={filtered} />
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
