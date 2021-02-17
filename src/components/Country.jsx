import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryByCode from "./CountryByCode";
export default function Country({ data }) {
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${data.match.params.countryName}`)
      .then((res) => res.json())
      .then((data) => setCountryInfo(data))
      .catch((e) => console.log(e));
  }, []);
  const [infos] = countryInfo;
  return (
    <div className="warper">
      {console.log(infos)}
      <Link to="/" className="btn btn__back">
        <i className="ri-arrow-left-line"></i>
        Back
      </Link>
      <div className="detail-card">
        <img className="detail-card-flag" src={infos?.flag} alt="" className="detail-card-flag" />
        <div className="detail-card-info">
          <h3>{infos?.name}</h3>
          <div className="detail-card-info-demographic">
            <ul>
              <li>
                <label>Native Name: </label>
                <span>{infos?.nativeName}</span>
              </li>
              <li>
                <label>Population: </label>
                <span>{infos?.population}</span>
              </li>
              <li>
                <label>Region: </label>
                <span>{infos?.region}</span>
              </li>
              <li>
                <label>Sub Region: </label>
                <span>{infos?.subregion}</span>
              </li>
              <li>
                <label>Capital: </label>
                <span>{infos?.capital}</span>
              </li>
            </ul>
          </div>
          <div className="detail-card-info-others">
            <ul>
              <li>
                <label>Top Level Domain: </label>
                <span>{infos?.topLevelDomain}</span>
              </li>
              <li>
                <label>Currencies: </label>
                <span>{infos?.currencies.map((el) => el.name + " ")}</span>
              </li>
              <li>
                <label>Languages: </label>
                <span>{infos?.languages.map((el) => el.name + " ")}</span>
              </li>
            </ul>
          </div>
          <div className="detail-card-info-boundires">
            <h4>Border Countries:</h4>
            <ul>
              {infos?.borders.map((el) => (
                <CountryByCode code={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
