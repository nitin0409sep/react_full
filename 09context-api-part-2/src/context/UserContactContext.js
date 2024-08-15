import { createContext, useContext } from "react";

// Create Context -> Step 1
export const UserContactContext = createContext({
  firstname: "nitin",
  lastname: "verma",
  mob: (val1, val2) => { },
});

// SET Provider -> Step 2
export const UserContactContextProvider = UserContactContext.Provider;

// Create function -> Step 3
export const userContact = () => {
  return useContext(UserContactContext);
};
