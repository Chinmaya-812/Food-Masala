import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    Email: "dummy@gmail.com",
  },
});

export default UserContext;
