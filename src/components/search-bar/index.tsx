import React from "react";
import "./styles.scss";

const SearchBar = ({ onChange }) => (
  <input className="search-bar" placeholder="search by name..." onChange={onChange} />
);

export default SearchBar;
