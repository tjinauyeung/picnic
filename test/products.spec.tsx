import React from "react";
import { shallow, mount } from "enzyme";
import { makeProducts } from "./fixtures/Product";
import Products from "../src/routes/products";

describe("Products", () => {
  const products = makeProducts();

  it("renders <ProductsNotFound/> component if products are empty", () => {
    const products = [];
    const component = shallow(<Products products={products} />);
    expect(component.name()).toBe("ProductsNotFound");
  });

  it("renders all products from the props", () => {
    const props = { products };
    const component = mount(<Products {...props} />);
    const renderedProducts = component.find("Product");
    expect(renderedProducts.length).toBe(props.products.length);
  });

  it("displays the name of the products", () => {
    const component = mount(<Products products={products} />);
    products.forEach(product => {
      expect(component.contains(product.name)).toBe(true);
    });
  });
});
