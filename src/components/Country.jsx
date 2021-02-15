import React from "react";

export default function Country({ data }) {
  console.log(data.match.params.countryName);
  return (
    <div className="warper">
      <a href="/" className="btn btn__back">
        <i className="ri-arrow-left-line"></i>
        Back
      </a>
      <div className="detail-card">
        <img
          className="detail-card-flag"
          src="https://restcountries.eu/data/dza.svg"
          alt=""
          className="detail-card-flag"
        />
        <div className="detail-card-info">
          <h3>Algeria</h3>
          <div className="detail-card-info-demographic">
            <ul>
              <li>
                <label>Native Name:</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name:</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name:</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name:</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name:</label>
                <span>ALG</span>
              </li>
            </ul>
          </div>
          <div className="detail-card-info-others">
            <ul>
              <li>
                <label>Native Name</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name</label>
                <span>ALG</span>
              </li>
              <li>
                <label>Native Name</label>
                <span>ALG</span>
              </li>
            </ul>
          </div>
          <div className="detail-card-info-boundires">
            <h4>Border Countries:</h4>
            <ul>
              <li>France</li>
              <li>France</li>
              <li>France</li>
              <li>Germany</li>
              <li>Germany</li>
              <li>Germany</li>
              <li>Netherlands</li>
              <li>Netherlands</li>
              <li>Netherlands</li>
              <li>Netherlands</li>
              <li>Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
