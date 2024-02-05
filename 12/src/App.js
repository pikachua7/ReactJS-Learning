import React, { lazy, Suspense, useEffect, useState } from "react";
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
import { UserContext } from "./utils/UserContext";
// import { Grocery } from "./components/Grocery";

import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { Cart } from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

// Top Level Component
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Atharva Paliwal",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* Header */}
          <Header />
          {/* Children */}
          <Outlet />
          {/* Footer */}
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
