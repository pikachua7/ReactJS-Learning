// Stores logged in user information globally

import { createContext } from "react";

export const UserContext = createContext({
  loggedInUser: "Default User",
});
