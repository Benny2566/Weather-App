import React from "react";
import "./TopBar.css";
import EnterButton from "./EnterButton";

function SearchBar(props) {
  return <input value={props.input} onChange={props.onChange} />;
}

export default SearchBar;
