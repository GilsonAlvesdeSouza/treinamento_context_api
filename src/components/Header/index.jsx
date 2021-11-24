import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
import { Container } from "./style";

function Header() {
  const { theme, user } = useContext(StateContext);

  return (
    <Container className={`theme-${theme}`}>
      {user.name} - {theme}
    </Container>
  );
}

export default Header;
