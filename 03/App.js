import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = <h1 id="heading">Hello From JSX!</h1>;

const jsxHeading = (
  <h1 id="heading">
    Hello From JSX!
    {heading2}
  </h1>
);

const TitleComponent = () => {
  return <h1>Hello From Title!</h1>;
};

// Calling one component inside another component : Component Composition

const HeaderComponent = () => {
  return (
    <div>
      <TitleComponent />
      {/* As jsxHeading is a normal JS object, we can import it in curly braces */}
      {jsxHeading}
      <h1 id="heading">Hello from React Functional Component!</h1>
    </div>
  );
};

console.log(HeaderComponent()); // Gives the object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeaderComponent()); This also works

root.render(<HeaderComponent />);
