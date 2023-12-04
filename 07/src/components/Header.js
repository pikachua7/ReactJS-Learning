import { IMG_URL } from "../utils/constant";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="auth-btn" onClick={handleAuthTextBtn}>
            {authTextBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
