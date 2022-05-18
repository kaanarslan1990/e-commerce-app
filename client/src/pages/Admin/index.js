import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Orders from "./Orders";
import "./style.css";

function Admin() {
    // const {path, url} = useMatch();
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <NavLink to="/admin">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">Product</NavLink>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
