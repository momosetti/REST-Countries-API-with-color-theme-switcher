import React, { useEffect, useState } from "react";

export default function CountryByCode({ code }) {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/alpha/" + code)
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);
  return <li>{name}</li>;
}
