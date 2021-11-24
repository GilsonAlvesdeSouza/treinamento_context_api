import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import UserContext from "../../contexts/UserContext";
import { Container } from "./style";

function Menu({ userName }) {
  return (
    <ThemeContext.Consumer>
      {(value) => (
       <UserContext.Consumer>
         {(user) =>(
           <Container className={`theme-${value}`}>{user.name}</Container>
         )}
       </UserContext.Consumer> 
      )}
    </ThemeContext.Consumer>
  );
}
export default Menu;