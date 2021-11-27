import { createContext, useContext, useReducer } from "react";
import { ThemeReducer, UserReducer } from "../reducers";

const initialState = {
  theme: ThemeReducer(),
  user: UserReducer(),
};

const MainReducer = (state, action) => ({
  theme: ThemeReducer(state.theme, action),
  user: UserReducer(state.user, action),
});

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(MainReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
