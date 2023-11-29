import React from "react";
import ReactDOM from "react-dom/client";

// Header Component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://images-platform.99static.com/CDG3tPS1HqvP7u8kJysYXIf-os4=/500x500/top/smart/99designs-contests-attachments/58/58659/attachment_58659944"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
