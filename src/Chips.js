import React from "react";
import { Route, NavLink } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h2>You chose chips</h2>
      <Route exact path="/"></Route>
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </div>
  );
}

export default Chips;
