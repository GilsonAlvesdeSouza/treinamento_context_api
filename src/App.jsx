import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext.js";
import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu } from "./components";

function App() {
  const [userName, setUserName] = useState("Gilson");
  const [tema, setTema] = useState('light');

  const handleTheme = () => {
    if(tema === "light"){
      setTema("dark");
    }else{
      setTema("light");
    }
  }

  return (
    <ThemeContext.Provider value={tema}>
      <Container>
        <ThemeContext.Consumer>
          {(value) => 
             <>
              Tema: <button onClick={handleTheme}>{value === "light" ? "Escuro" : "Claro"}</button>
             </>
          }
        </ThemeContext.Consumer>
        <Header userName={userName} />
        <Conteudo>
          <Menu userName={userName} />
          <Body userName={userName} setUserName={setUserName} />
        </Conteudo>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;