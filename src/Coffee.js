import React from "react";
import { Route, NavLink } from "react-router-dom";

function Coffee() {
  return (
    <div>
      <h2>You chose coffee</h2>
      <Route exact path="/"></Route>
      <NavLink exact to="/">
        Go Back
      </NavLink>
    </div>
  );
}

export default Coffee;
