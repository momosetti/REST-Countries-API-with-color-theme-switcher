import React, { useState } from 'react'
import logo from './logo.svg'
import "./css/style.css"
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <nav>
            <div class="container">
                <h1>Where in the world</h1>
                <div id="Dark-mode-toggle" class="darkmode">
                    <label for=""> <i class="ri-moon-line"></i>Dark Mode</label>
                    <input type="checkbox" name="darkmode" />
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="search-filter">
                <input type="text" id="search" placeholder="Search for a country..." />
                <select name="filter" id="region">
                    <option value="">Filter By Region</option>
                    <option value="">Africa</option>
                    <option value="">America</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>
                    <option value="">Ocenia</option>
                </select>
            </div>
        </div>
        <div class="container">
            <div class="cards">
                <div class="card">
                    <div class="card-flag">
                        <img src="https://restcountries.eu/data/dza.svg" alt="" />
                    </div>
                    <div class="card-description">
                        <h3 class="card-title">Algeria</h3>
                        <ul>
                            <li><label>Population:</label> 40.000.02</li>
                            <li><label>Region:</label> Africa</li>
                            <li><label>Capital:</label> Algies</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-flag">
                        <img src="https://restcountries.eu/data/dza.svg" alt="" />
                    </div>
                    <div class="card-description">
                        <h3 class="card-title">Algeria</h3>
                        <ul>
                            <li><label>Population:</label> 40.000.02</li>
                            <li><label>Region:</label> Africa</li>
                            <li><label>Capital:</label> Algies</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-flag">
                        <img src="https://restcountries.eu/data/dza.svg" alt="" />
                    </div>
                    <div class="card-description">
                        <h3 class="card-title">Algeria</h3>
                        <ul>
                            <li><label>Population:</label> 40.000.02</li>
                            <li><label>Region:</label> Africa</li>
                            <li><label>Capital:</label> Algies</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    </>
  )
}

export default App
