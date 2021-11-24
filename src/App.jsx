import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext.js";
import UserContext from "./contexts/UserContext.js";
import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu } from "./components";

const userDefault = {
  name: "Gilson",
  email: "gilsonavesdesouza@hotmail.com",
};

function App() {
  const [user, setUser] = useState(userDefault);
  const [tema, setTema] = useState("light");

  const handleTheme = () => {
    if (tema === "light") {
      setTema("dark");
    } else {
      setTema("light");
    }
  };

  return (
    <ThemeContext.Provider value={tema}>
      <UserContext.Provider value={user}>
        <Container>
          <ThemeContext.Consumer>
            {(value) => (
              <>
                Tema:{" "}
                <button onClick={handleTheme}>
                  {value === "light" ? "Escuro" : "Claro"}
                </button>
              </>
            )}
          </ThemeContext.Consumer>
          <Header />
          <Conteudo>
            <Menu />
            <Body userName={user.name} setUserName={setUser} />
          </Conteudo>
        </Container>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
