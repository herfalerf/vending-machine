import React from "react";
import { Route, NavLink } from "react-router-dom";

function Ramen() {
  return (
    <div>
      <h2>You chose ramen</h2>
      <Route exact path="/"></Route>
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </div>
  );
}

export default Ramen;
