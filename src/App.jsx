import "./App.style.js";
import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu } from "./components";

function App() {
  return (
    <Container>
      <Header />
      <Conteudo>
        <Menu />
        <Body />
      </Conteudo>
    </Container>
  );
}

export default App;
