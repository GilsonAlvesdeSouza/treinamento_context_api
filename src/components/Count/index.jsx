import React from "react";
import { useReducer } from "react";
import { BtnDouble, BtnReset, BtnSub, BtnSum, Container } from "./Style";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      state = { ...state, count: state.count + 1 };
      break;
    case "decrement":
      state = { ...state, count: state.count + 1 };
      break;
    case "double":
      state = { ...state, count: state.count * 2 };
      break;
    case "reset":
      state = { ...state, count: action.count };
      break;
    default:
  }

  return state;
};

function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIcrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecremet = () => {
    dispatch({ type: "decrement" });
  };

  const handleDouble = () => {
    dispatch({ type: "double" });
  };

  const handleReset = () => {
    dispatch({ type: "reset", count: 0 });
  };

  return (
    <Container>
      <>
        <BtnSum onClick={handleIcrement}>+</BtnSum>
        <span>{state.count}</span>
        <BtnSub onClick={handleDecremet}>-</BtnSub>
      </>
      <BtnDouble onClick={handleDouble}>Dobrar</BtnDouble>
      <BtnReset onClick={handleReset}>Zerar</BtnReset>
    </Container>
  );
}

export default Count;
