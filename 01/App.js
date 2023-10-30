/*

Creating a structure like - 

<div id="parent">
  <div id="children">
      <h1>I'm h1 tag</h1>
  </div>
</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {
      id: "child",
    },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
