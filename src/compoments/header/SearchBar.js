import React from "react";

const SearchBar = props => (
  <form onSubmit={props.handleSubmit}>
    <input value={props.input} onChange={props.handleInput} type="text" />
    <button type="submit">submit</button>
  </form>
);

export default SearchBar;
