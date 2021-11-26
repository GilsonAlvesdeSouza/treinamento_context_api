import { useStateValue } from "../../contexts/StateContext";
import { Container } from "./style";

function Header() {
  const [state, dipatch] = useStateValue();

  return (
    <Container className={`theme-${state.theme}`}>
      {state.user.name} - {state.theme}
    </Container>
  );
}

export default Header;
