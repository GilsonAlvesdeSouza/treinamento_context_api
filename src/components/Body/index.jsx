import { useState } from "react";
import { useStateValue } from "../../contexts/StateContext";
import Count from "../Count";
import { Container } from "./style";

function Body() {
  const [inputName, setInputName] = useState("");
  const [state, dispatch] = useStateValue();

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter" && inputName !== "") {
      dispatch({
        type: "setName",
        userName: inputName
      });
      setInputName("");
    }
  };

  const handleClickUserName = () => {
    if (inputName !== "") {
      dispatch({
        type: "setName",
        userName: inputName
      });
      setInputName("");
    }
  };

  return (
    <Container className={`theme-${state.theme}`}>
      <p>{state.user.name}</p>
      <input
        type="text"
        placeholder="informe um nome"
        value={inputName}
        onChange={(e) => handleInputName(e)}
        onKeyUp={(e) => handleKeyEnter(e)}
      />
      <button onClick={handleClickUserName}>Mudar nome de Usuário</button>
      <hr />

      <Count />
    </Container>
  );
}

export default Body;
