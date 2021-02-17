import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const filterChanged = (event) => setFilterQuery(event.target.value);
  const searchInput = (event) => setSearchQuery(event.target.value);
  let filtredArr = countries
    .filter((el) => el.region.toLowerCase().includes(filterQuery.toLowerCase()))
    .filter((el) => el.name.toLowerCase().includes(searchQuery.toLowerCase()));
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <main>
      <div className="container">
        <div className="search-filter">
          <input
            onChange={searchInput}
            type="text"
            id="search"
            placeholder="Search for a country..."
          />
          <select onChange={filterChanged} name="filter" id="region">
            <option value="">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          {" "}
          {filtredArr.map((el) => (
            <Card data={el} key={el.name} />
          ))}{" "}
        </div>
      </div>
    </main>
  );
}
