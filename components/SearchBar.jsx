import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        id="country"
        name="country"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        placeholder="Search for a country"
      />
    </div>
  );
}
