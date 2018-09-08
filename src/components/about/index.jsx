import React from 'react';
import { Header, Label } from 'semantic-ui-react';
const About = () => (
  <div>
    <Header as='h2'>About this project</Header>
    <p>This app consumes GeoNames's geographical database  to show information
     about countries and cities, Countryflag to get flags and HolidayAPI to get holiday information.
    </p>
    <Label as='a' target="_blank" href="https://github.com/luismbcr/React-Geodata-APP" content='Github' icon='github' />
  </div>
);

export default About;
