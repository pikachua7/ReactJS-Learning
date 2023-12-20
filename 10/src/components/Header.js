import { IMG_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
  const [authTextBtn, setAuthTextBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

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
          <li>Online status : {onlineStatus ? "✅" : "🔴"}</li>
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
            <Link to="/grocery">Grocery</Link>
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
