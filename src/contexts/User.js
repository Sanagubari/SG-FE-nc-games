import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userLogged, setUserLogged] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false)
  return (
    <UserContext.Provider
      value={{ userLogged, setUserLogged, isLoggedIn, setIsLoggedIn, isError, setIsError }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
