import React, { useEffect, useState } from "react";
import { Router, Redirect, Location, navigate } from "@reach/router";
import ProductService from "./services/product-service";
import SearchService from "./services/search-service";
import Products from "./routes/products";
import ProductDetail from "./routes/product-detail";
import NotFound from "./routes/not-found";
import Dialog from "./components/dialog";
import Header from "./components/header";
import Search from "./components/search";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";
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
    <Wrapper>
      <Header>
        <Search onChange={search} />
      </Header>
      <Location>
        {({ location }) => {
          const previousLocation = location.state && location.state.previousLocation;
          return (
            <main className="main">
              <Router location={previousLocation || location} primary={false}>
                <Redirect from="/" to="/list" noThrow />
                <Products path="/list" products={filtered} />
                <ProductDetail path="/:id/detail" />
                <NotFound default />
              </Router>
              <Dialog isOpen={previousLocation} onClose={navigateTo(previousLocation)}>
                <Router location={location}>
                  <ProductDetail path="/:id/detail" />
                </Router>
              </Dialog>
            </main>
          );
        }}
      </Location>
      <Footer />
    </Wrapper>
  );
};

export default App;
