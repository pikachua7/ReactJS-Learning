import React from "react";
import { User } from "./User";
import { UserClassComponent } from "./UserClassComponent";

// export const About = () => {
//   return (
//     <div>
//       {/* <User name={"Atharva from Functional component"} /> */}
//       <UserClassComponent name={"Atharva from Class component"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Inside Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        {/* <User name={"Atharva from Functional component"} /> */}
        <UserClassComponent name={"Atharva"} />
        <UserClassComponent name={"Atharva 2.0"} />
      </div>
    );
  }
}

export default About;
