import React from "react";

import "./Searchbar.css";

const Searchbar = (props) => {
  const temp = props.keyDownHandler;
  const keyDownFunction = (event) => {
    props.keyDownHandler(event.target.value);
  };

  return (
    <>
      <input
        className="search-bar"
        placeholder="Search upcoming launches..."
        onInput={keyDownFunction}
      ></input>
    </>
  );
};

export default Searchbar;
