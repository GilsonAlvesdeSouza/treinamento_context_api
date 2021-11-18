import React from 'react';
import {Container} from "./style"

function Menu({userName}) {
    return (
        <Container>
            {userName}
        </Container>
    );
}

export default Menu;