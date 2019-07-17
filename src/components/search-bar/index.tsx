import React from "react";
import "./styles.scss";

const SearchBar = ({ onChange }) => (
  <input className="search-bar" placeholder="Search by name..." onChange={onChange} />
);

export default SearchBar;
