import { useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Container } from "./style";

function Body({ userName, setUserName }) {
  const [inputName, setInputName] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      setUserName({name: inputName});
      setInputName("");
    }
  };

  const handleClickUserName = () => {
    if (inputName !== "") {
      setUserName({name: inputName});
      setInputName("");
    }
  };

  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Container className={`theme-${value}`}>
          <p>{userName}</p>
          <input
            type="text"
            placeholder="informe um nome"
            value={inputName}
            onChange={(e) => handleInputName(e)}
            onKeyUp={(e) => handleKeyEnter(e)}
          />
          <button onClick={handleClickUserName}>Mudar nome de Usuário</button>
        </Container>
      )}
    </ThemeContext.Consumer>
  );
}

export default Body;
