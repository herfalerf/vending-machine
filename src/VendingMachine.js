import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Chips from "./Chips";
import Coffee from "./Coffee";
import Soda from "./Soda";
import Ramen from "./Ramen";
import NavBar from "./NavBar";

function VendingMachine() {
  return (
    <BrowserRouter>
      <div className="VendingMachine">
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/ramen">
          <Ramen />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default VendingMachine;
