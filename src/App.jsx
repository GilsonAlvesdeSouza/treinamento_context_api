import { Container, Conteudo } from "./App.style.js";
import { Body, Header, Menu, SetTheme } from "./components";
import { StateProvider } from "./contexts/StateContext.js";

const userDefault = {
  name: "Gilson",
  email: "gilsonavesdesouza@hotmail.com",
};

function App() {
  // const [user, setUser] = useState(userDefault);
  // const [theme, setTheme] = useState("light");

  // const providerValue = {
  //   theme: theme,
  //   user: user,
  // };

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
