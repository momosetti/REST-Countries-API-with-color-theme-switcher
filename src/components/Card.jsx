import React from "react";
import { Link } from "react-router-dom";
export default function Card({ data }) {
  return (
    <Link to={data.name}>
      <div className="card">
        <div className="card-flag">
          <img src={data.flag} alt="" />
        </div>
        <div className="card-description">
          <h3 className="card-title">{data.name}</h3>
          <ul className="card-info">
            <li>
              <label>Population:</label> {data.population}{" "}
            </li>
            <li>
              <label>Region:</label> {data.region}
            </li>
            <li>
              <label>Capital:</label>
              {data.capital}{" "}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
