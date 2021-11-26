import { useState, useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
import Count from "../Count";
import { Container } from "./style";

function Body({ setUserName }) {
  const [inputName, setInputName] = useState("");
  const { theme, user } = useContext(StateContext);

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter" && inputName !== "") {
      setUserName({ name: inputName });
      setInputName("");
    }
  };

  const handleClickUserName = () => {
    if (inputName !== "") {
      setUserName({ name: inputName });
      setInputName("");
    }
  };

  return (
    <Container className={`theme-${theme}`}>
      <p>{user.name}</p>
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
