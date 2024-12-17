import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", gap: "30px", fontSize: "22px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <BsCart color="black" size={20} />
            Cart
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            Profile
            <CgProfile />
          </p>
          <p>Logout</p>
        </div>
        <div>
          <h1>
            <Link to="/">GoMyShop</Link>
          </h1>
        </div>
        <div style={{ display: "flex", gap: "30px", fontSize: "22px" }}>
          <p>
            <Link to="/products">Products</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
