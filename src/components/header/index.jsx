import React from 'react';
import { Header } from 'semantic-ui-react';
import Nav from '../nav';

export default (props) => (
  <header>
    <Header as='h1'>{props.title}</Header>
    <Nav/>
  </header>
);
