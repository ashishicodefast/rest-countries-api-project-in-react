import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SkeletonDetail from "./SkeletonDetail";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country.toLowerCase();
  const [isCountryFound, setCountryFound] = useState(true);

  const [country, setCountryDetail] = useState(null);
  const navigate = useNavigate();
  // console.log(country);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((countriesDatas) => {
        // setCountryDetail()
        const [countriesData] = countriesDatas.length == 1 ? countriesDatas : countriesDatas.filter((countryData)=>countryData.name.common.toLowerCase().includes(countryName));

        //  console.log(countriesData);
        setCountryDetail({
          flag: countriesData?.flags?.svg,
          name: countriesData.name.common,
          nativeName: countriesData.name?.nativeName
            ? Object.values(countriesData.name.nativeName)[0]?.official
            : "N/A",
          population: countriesData.population.toLocaleString("en-IN"),
          region: countriesData?.region ?? "N/A",
          subRegion: countriesData?.subregion ?? "N/A",
          capital: countriesData?.capital?.[0] ?? "N/A",
          topLevelDomain: countriesData?.tld?.[0] ?? "N/A",
          curr: countriesData?.currencies ? Object.values(countriesData.currencies)[0]?.name : "N/A",
          language: countriesData?.languages ? Object.values(countriesData.languages).join(", ") : "N/A",
          borders: [],
        });
        if (!countriesData.borders) {
          countriesData.borders = [];
        }
        // console.log(countriesData.borders);
        Promise.all(
          countriesData.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([countriesBorderData]) => countriesBorderData.name.common);
          })
        ).then((BorderData) => setCountryDetail((prevState) => ({ ...prevState, borders: BorderData })));
      })
      .catch((err) => {
        // console.dir(err);
 setCountryFound(false)
      });
  }, [countryName]);
  // console.log(country);F
  return isCountryFound == false ? (
    <h4 style={{ marginTop: "20px", textAlign: "center" }}>Country Not found </h4>
  ) : (
    <main className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      {country == null ? (
        <SkeletonDetail />
      ) : (
        <section className="country-details-section" id="countryCard">
          <div className="details-wrapper">
            <div className="fit image-container">
              <img src={country.flag} alt="be flag" />
            </div>
            <div className="fit details-container">
              <h2>{country.name}</h2>
              <div className="country-information">
                <div className="info-1">
                  <p>
                    <b>Native Name : </b> {country.nativeName}
                  </p>
                  <p>
                    <b>Population : </b> {country.population}
                  </p>
                  <p>
                    <b>Region : </b> {country.region}
                  </p>
                  <p>
                    <b>Sub Region : </b>
                    {country.subRegion}
                  </p>
                  <p>
                    <b>Capital : </b> {country.capital}
                  </p>
                </div>
                <div className="info-2">
                  <p>
                    <b>Top Level Domain : </b> {country.topLevelDomain}
                  </p>
                  <p>
                    <b>Currencies : </b> {country.curr}
                  </p>
                  <p>
                    <b>Languages : </b> {country.language}
                  </p>
                </div>
              </div>
              <div className="other-country-detail">
                {country.borders.length !== 0 && (
                  <p>
                    <b>Border Countries: </b>
                    {country.borders.map((border, i) => {
                      return (
                        <Link key={i} to={"/" + border}>
                          {border}
                        </Link>
                      );
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
