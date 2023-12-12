import { User } from "./User";
import { UserClassComponent } from "./UserClassComponent";

export const About = () => {
  return (
    <div>
      <User name={"Atharva from Functional component"} />
      <UserClassComponent name={"Atharva from Class component"} />
    </div>
  );
};
