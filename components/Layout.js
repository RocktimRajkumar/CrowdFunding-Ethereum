import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';

export default props => {
    return (
        <Container>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <Header />
            {props.children}
        </Container>
    );
};