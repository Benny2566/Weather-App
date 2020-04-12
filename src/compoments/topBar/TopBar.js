import React, { useState } from "react";
import CelsiusSwitch from "./CelsiusSwitch";
import LocationButton from "./LocationButton";
import EnterButton from "./EnterButton";
//import SearchBar from "./SearchBar";
import SearchBar from "../header/SearchBar";
import Time from "./Time";
import "./TopBar.css";

function TopBar(props) {
  const [input, setInput] = useState();

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearch(input);
  };

  return (
    <div className="tbBackground">
      <div className="elementBox">
        <SearchBar
          input={input}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
      <Time />
    </div>
  );
}
export default TopBar;
