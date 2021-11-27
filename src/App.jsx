import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu, SetTheme } from "./components";
import { StateProvider } from "./contexts/StateContext.js";

function App() {
  return (
    <StateProvider>
      <Container>
        <SetTheme />
        <Header />
        <Conteudo>
          <Menu />
          <Body />
        </Conteudo>
      </Container>
    </StateProvider>
  );
}

export default App;
