import React from "react";
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Country from "./components/Country";
import { Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/:countryName" render={(props) => <Country data={props} />} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
