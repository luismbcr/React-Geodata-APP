import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default (props) => (
  <Card.Group as={ Link } to={ `country/${props.id}` } className="country" >
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={ props.flag } />
        <Card.Header>{ props.name }</Card.Header>
        <Card.Meta>{ props.continent }</Card.Meta>
        <Card.Description>
          Capital: { props.capital }
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);
