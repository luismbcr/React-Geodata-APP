import React from 'react';
import { Grid, List, Header, Loader } from 'semantic-ui-react';

const Summary = (props) => (
  <Grid columns={ 3 }>
    <Grid.Row>
      <Grid.Column>
        <Header as='h3'>Country Info</Header>
        <List>
          <List.Item>
            <List.Header>Flag</List.Header>
            <img src={ `https://www.countryflags.io/${props.country.countryCode}/flat/16.png` } alt={ `${props.country.countryCode} flag` }/>
          </List.Item>
          {
            Object.keys(props.country).map((item) => {
              return (<List.Item key={ item }>
                <List.Header>{item}</List.Header>
                {props.country[item]}
              </List.Item>);
            })
          }
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header as='h3'>Cities</Header>
        {
          props.citiesLoading
            ? <Loader active inline='centered' />
            : (<List as='ul'>
              { props.cities
                ? props.cities.map((item) => <List.Item key={ item.geonameId } as='li'>{item.name}</List.Item>)
                : <List.Item as='li'>No information found</List.Item>
              }
            </List>)
        }
      </Grid.Column>
      <Grid.Column>
        <Header as='h3'>Holiday List</Header>
        {
          props.holidaysLoading
            ? <Loader active inline='centered' />
            : (<List as='ul'>
              {Object.keys(props.holidays).length
                ? Object.keys(props.holidays).map((item) => <List.Item key={ item } as='li'>{props.holidays[item][0].name}</List.Item>)
                : (<List.Item as='li'>No information found</List.Item>)}
            </List>)
        }
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Summary;
