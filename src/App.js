import React from "react";

import { Route } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Navbar from "./Components/Navbar";
import SearchComponent from "./Components/SearchComponent";
import "./style.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <header className="page-header">
        <img
          style={{ maxWidth: "100px", marginTop: "40px" }}
          className="logo-img"
          src="https://raw.githubusercontent.com/danicota/ecomm-store-project/ec8a2e517475a1ac264cf06680c8387e3e8f7437/img/Asset%201.svg"
          alt="kenutz"
        />

        <Navbar />

        <SearchComponent />
      </header>

      <Route exact path="/">
        <Shop />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
