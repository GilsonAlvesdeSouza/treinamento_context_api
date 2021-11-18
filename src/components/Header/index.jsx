import React from 'react';
import { Container } from './style';

function Header({userName}) {
    return (
        <Container>
           {userName} 
        </Container>
    );
}

export default Header;