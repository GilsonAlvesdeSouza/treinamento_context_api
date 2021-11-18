import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext.js";
import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu } from "./components";

function App() {
  const [userName, setUserName] = useState("Gilson");

  return (
    <ThemeContext.Provider value={"Light"}>
      <Container>
        <Header userName={userName} />
        <Conteudo>
          <Menu userName={userName} />
          <Body userName={userName} setUserName={setUserName}/>
        </Conteudo>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
