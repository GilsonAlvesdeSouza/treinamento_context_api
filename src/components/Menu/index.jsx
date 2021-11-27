import { useStateValue } from "../../contexts/StateContext";

import { Container } from "./style";

function Menu({ userName }) {
  const [state] = useStateValue();

  return <Container className={`theme-${state.theme}`}>{state.user.name}</Container>;
}
export default Menu;
