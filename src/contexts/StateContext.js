import { createContext, useContext, useEffect, useReducer } from "react";
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

const localState = JSON.parse(localStorage.getItem("ctx"));

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("ctx", JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
