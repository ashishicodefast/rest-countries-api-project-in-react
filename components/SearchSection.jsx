import React from "react";
import SearchBar from "./SearchBar";
import Filtter from "./Filtter";

export default function SearchSection({ setQuery }) {
  return (
    <section className="search-section">
      <SearchBar setQuery={setQuery} />
      <Filtter setQuery={setQuery} />
    </section>
  );
}
