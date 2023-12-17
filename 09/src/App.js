import React from "react";
import ReactDOM from "react-dom/client";
// Header Component
import { Header } from "./components/Header";
// Body
import { Body } from "./components/Body";

// Routing Configuration
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantsMenu } from "./components/RestaurantsMenu";

// Top Level Component
const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Children */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
