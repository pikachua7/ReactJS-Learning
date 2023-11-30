import React from "react";
import ReactDOM from "react-dom/client";
// Header Component
import { Header } from "./components/Header";
// Body
import { Body } from "./components/Body";

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />s{/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
