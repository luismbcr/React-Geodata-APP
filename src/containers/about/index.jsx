import React from 'react';
import { Header, Label } from 'semantic-ui-react';
export default () => (
  <div>
    <Header as='h2'>About this project</Header>
    <p>This app will consume GeoNames geographical database to show information regarding countries, cities and airport weather.
    </p>
    <Label as='a' href="https://github.com/luismbcr/React-Geodata-APP" content='Github' icon='github' />
  </div>
);
