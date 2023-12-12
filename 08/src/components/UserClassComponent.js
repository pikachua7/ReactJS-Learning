import React from "react";

export class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Inside Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    const { name } = this.props;
    const { count } = this.state;

    const handleClick = () => {
      this.setState({ count: count + 1 });
    };

    return (
      <div className="user-card">
        <h4>Count: {count}</h4>
        <button onClick={handleClick}>Click Me!</button>
        <h2>Name: {name}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
