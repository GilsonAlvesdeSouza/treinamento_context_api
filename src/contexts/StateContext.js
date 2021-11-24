import { createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, value }) => {
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => StateContext(StateContext);
