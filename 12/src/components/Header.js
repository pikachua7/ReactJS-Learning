import { IMG_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [authTextBtn, setAuthTextBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleAuthTextBtn = () => {
    authTextBtn === "Login"
      ? setAuthTextBtn("Logout")
      : setAuthTextBtn("Login");
  };

  return (
    <div className="flex justify-between shadow-lg">
      <div className="bg-pink-50">
        <img className="w-32" src={IMG_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">Cart ({cartItems.length} items)</li>
          <button className="auth-btn px-4" onClick={handleAuthTextBtn}>
            {authTextBtn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
