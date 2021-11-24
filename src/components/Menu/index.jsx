import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

import { Container } from "./style";

function Menu({ userName }) {
  const { theme, user } = useContext(StateContext);

  return <Container className={`theme-${theme}`}>{user.name}</Container>;
}
export default Menu;
