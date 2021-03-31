import React from "react";

const Search = ({ searchHandler }) => {
  const handleSearchInputChange = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <div>
      <input
        className="text-black"
        type="text"
        placeholder="Search"
        onChange={handleSearchInputChange}
      />
      <i type="submit" />
    </div>
  );
};

export default Search;
