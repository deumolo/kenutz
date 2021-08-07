import React from "react";

import { Route } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Favorites from "./Favorites";

import "./style.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
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
