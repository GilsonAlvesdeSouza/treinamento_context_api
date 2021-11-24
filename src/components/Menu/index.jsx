import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Container } from "./style";

function Menu({ userName }) {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <Container className={`theme-${value}`}>{userName}</Container>
      )}
    </ThemeContext.Consumer>
  );
}
export default Menu;