import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Menu, Header } from 'semantic-ui-react';
import Home from './containers/home';
import About from './components/about';
import Country from './containers/country';

const App = () => (
  <div>
    <Container>
      <header>
        <Header as='h1'>Geo App</Header>
        <Menu className="main-menu">
          <Menu.Item as={ Link } to="/">Home</Menu.Item>
          <Menu.Item as={ Link } to="/about">About</Menu.Item>
          <Menu.Item disabled>Favorite Places</Menu.Item>
        </Menu>
      </header>

      <main>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/country/:cc" component={ Country } />
      </main>
    </Container>
  </div>

);

export default App;
