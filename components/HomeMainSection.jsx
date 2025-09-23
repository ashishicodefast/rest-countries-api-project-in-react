import React, { useState } from "react";
import SearchSection from "./SearchSection";
import CountriesSection from "./CountriesSection";

export default function HomeMainSection() {
    const [query, setQuery] = useState('');
  return (
    <main className="container">
      <SearchSection setQuery={setQuery} />
      <CountriesSection query={query} />
    </main>
  );
}
