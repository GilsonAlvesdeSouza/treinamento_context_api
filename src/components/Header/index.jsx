import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";
import { Container } from "./style";

function Header() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <Container className={`theme-${theme}`}>
      {user.name} - {theme}
    </Container>
  );
}

export default Header;
