import React from "react";
import { Route, NavLink } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h2>You chose soda</h2>
      <Route exact path="/"></Route>
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </div>
  );
}

export default Soda;
