import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Orders from "./Orders";
import "./style.css";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/NewProduct";

function Admin() {
    // const {path, url} = useMatch();
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/new" element={<NewProduct />}/>
          <Route path="/products/:product_id" element={<ProductDetail />}/>
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
