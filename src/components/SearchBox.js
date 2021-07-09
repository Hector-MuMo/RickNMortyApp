import React, { useState } from "react";

const SearchBox = ({ getLocation }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-box">
      <label>Search a Location by ID</label>
      <br />
      <label>{`(From 1 to 108 Only)`}</label>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={(e) => getLocation(inputValue)}>Search</button>
    </div>
  );
};

export default SearchBox;
