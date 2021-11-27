/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  name: "Visitante",
  email: "visitante@gmail.com",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.userName };

    case "setEmail":
      return { ...state, name: action.userName };
    default:
  }
  return state;
};
