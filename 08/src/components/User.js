import { useEffect, useState } from "react";

export const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Inside useEffect");
    }, 1000);

    // gets called on unmounting the component
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="user-card">
      <h4>Count: {count}</h4>
      <h2>Name: {name}</h2>
      <h3>Location</h3>
      <h4>Contact</h4>
    </div>
  );
};
