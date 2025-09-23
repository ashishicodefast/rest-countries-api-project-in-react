import React from "react";

export default function Filtter({setQuery}) {
  return (
    <div className="filter-option">
      <select name="region" id="region" onChange={(e)=>setQuery(e.target.value.toLowerCase())}> 
        <option hidden>Filter by Region</option>
        <option value="">All Region</option>
        <option value="Americas">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
