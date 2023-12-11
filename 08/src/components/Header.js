import { IMG_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [authTextBtn, setAuthTextBtn] = useState("Login");

  const handleAuthTextBtn = () => {
    authTextBtn === "Login"
      ? setAuthTextBtn("Logout")
      : setAuthTextBtn("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">Cart</Link>
          </li>
          <button className="auth-btn" onClick={handleAuthTextBtn}>
            {authTextBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
