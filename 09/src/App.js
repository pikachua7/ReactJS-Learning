import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// Header Component
import { Header } from "./components/Header";
// Body
import { Body } from "./components/Body";

// Routing Configuration
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantsMenu } from "./components/RestaurantsMenu";
// import { Grocery } from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
