import React from "react";

export class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h4>Count: {count}</h4>
        <h2>Name: {name}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
