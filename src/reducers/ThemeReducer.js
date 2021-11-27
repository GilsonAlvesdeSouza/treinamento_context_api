/* eslint-disable import/no-anonymous-default-export */
const initialState =  "light"


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "setTheme":
      return  action.theme ;
    default:
  }
  return state;
};
