import React from "react";

export class UserClassComponent extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
