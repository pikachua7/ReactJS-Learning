import React from "react";

export class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "",
        avatar_url: "",
      },
    };

    // console.log(this.props.name + " " + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " " + "Inside Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/pikachua7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component UnMount");
  }

  render() {
    // console.log(this.props.name + " " + "Child Render");
    const { name, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    const handleClick = () => {
      this.setState({ count: count + 1 });
    };

    return (
      <div className="user-card">
        <h4>Count: {count}</h4>
        <button onClick={handleClick}>Click Me!</button>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
