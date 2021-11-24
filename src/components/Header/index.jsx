import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";
import { Container } from "./style";

function Header() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <UserContext.Consumer>
          {(user) => (
            <Container className={`theme-${value}`}>
              {user.name} - {value}
            </Container>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
