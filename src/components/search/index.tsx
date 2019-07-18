import React from "react";
import "./styles.scss";

const Search = ({ onChange }) => (
  <input className="search" placeholder="Search by name..." onChange={onChange} />
);

export default Search;
