import { createContext, useContext, useReducer } from "react";

const initialState = {
  theme: "light",
  user: {
    name: "Visitante",
    email: "visitante@gmail.com",
  },
};

const reducer = (state, action) => {
  let user = { ...state.user };
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.theme };

    case "setName":
      user.name = action.userName;
      return { ...state, user };

    case "setEmail":
      user.email = action.userEmail;
      return { ...state, user };
    default:
  }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
