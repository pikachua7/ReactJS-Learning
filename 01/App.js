const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
// {} in the above statement is there for giving attributes to the tags ex. - <h1 id="heading"></h1>

// We need to create a root where react can perform all of its dom manipulation
// creating a root comes from DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
