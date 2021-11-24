import { useState } from "react";
import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu } from "./components";
import SetTheme from "./components/SetTheme/index.jsx";
import { StateProvider } from "./contexts/StateContext.js";

const userDefault = {
  name: "Gilson",
  email: "gilsonavesdesouza@hotmail.com",
};

function App() {
  const [user, setUser] = useState(userDefault);
  const [theme, setTheme] = useState("light");

  const providerValue = {
    theme: theme,
    user: user,
  };

  return (
    <StateProvider value={providerValue}>
      <Container>
        <SetTheme setTheme={setTheme} />
        <Header />
        <Conteudo>
          <Menu />
          <Body setUserName={setUser} />
        </Conteudo>
      </Container>
    </StateProvider>
  );
}

export default App;
