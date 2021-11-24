import { useState, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";
import { Container } from "./style";

function Body({ setUserName }) {
  const [inputName, setInputName] = useState("");
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
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
    </Container>
  );
}

export default Body;
