import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome To The Vending Machine</h1>
      <nav className="VendingMachine">
        <NavLink exact to="/chips">
          Chips
        </NavLink>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
        <NavLink exact to="/coffee">
          Coffee
        </NavLink>
        <NavLink exact to="/ramen">
          Ramen
        </NavLink>
      </nav>
    </div>
  );
}

export default Home;
