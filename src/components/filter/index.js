import React from 'react';
import { Input } from 'semantic-ui-react';

export default (props) => (
  <Input icon='search' placeholder='Search...' value={ props.searchValue } onChange={ (e) => props.findCountries(e.target.value) } />);
