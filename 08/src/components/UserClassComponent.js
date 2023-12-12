import React from "react";

export class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
