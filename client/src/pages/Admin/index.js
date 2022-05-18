import React from "react";
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <NavLink to="/">AdminHome</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Admin;
