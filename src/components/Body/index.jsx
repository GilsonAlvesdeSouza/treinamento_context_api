import { useState } from "react";
import { Container } from "./style";

function Body({ userName, setUserName }) {
  const [inputName, setInputName] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      setUserName(inputName);
      setInputName("");
    }
  };

  const handleClickUserName = () => {
    if (inputName !== "") {
      setUserName(inputName);
      setInputName("");
    }
  };

  return (
    <Container>
      <p>{userName}</p>
      <input
        type="text"
        value={inputName}
        onChange={(e) => handleInputName(e)}
        onKeyUp={(e) => handleKeyEnter(e)}
      />
      <button onClick={handleClickUserName}>Mudar nome de Usuário</button>
    </Container>
  );
}

export default Body;
