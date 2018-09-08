import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './containers/home';
import About from './components/about';
import Country from './containers/country';
import Header from './components/header';
const App = () => (
  <div>
    <Container>
      <Header title="Geo App" />
      <main>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/country/:cc" component={ Country } />
      </main>
    </Container>
  </div>

);

export default App;
