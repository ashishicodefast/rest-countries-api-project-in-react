import React from "react";
import { Link } from "react-router-dom";

export default function CountriesList({name, population, region, capital,flag,data}) {
  return (
    <Link to={`/${name}` } className="country" state={data}>
      <div className="country-img">
        <img src={flag} alt={name + 'flag'} />
      </div>
      <div className="country-info">
        <h2 className="country-name">{name}</h2>
        <p className="country-population">
          <b>Population : </b>
          <span>{population}</span>
        </p>
        <p className="country-region">
          <b>Region :</b>
          <span>{region}</span>
        </p>
        <p className="country-capital">
          <b>Capital :</b> <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
}
