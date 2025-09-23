import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import SkeletoneCard from "./SkeletoneCard";

export default function CountriesSection({ query }) {
  const [countries, setCountreis] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("countriesData")) {
     setCountreis(JSON.parse(localStorage.getItem("countriesData")))
    } else {
      fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
        .then((res) => res.json())
        .then((countriesData) => {
          localStorage.setItem('countriesData',JSON.stringify(countriesData))
          setCountreis(countriesData)});
    }
  }, []);
  return countries.length == 0 ? (
    <div className="SkeletonContainer">
      <SkeletoneCard />
    </div>
  ) : (
    <section className="countries-section">
      <div className="loader"></div>
      <div className="countries-wrapper">
        {countries
          .filter(
            (country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountriesList
                key={country.name.common}
                name={country.name.common}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0]}
                flag={country.flags.svg}
                data={countries}
              />
            );
          })}
      </div>
    </section>
  );
}
