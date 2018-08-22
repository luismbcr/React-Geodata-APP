import React from 'react';
import { Header, Divider, Grid } from 'semantic-ui-react';
import Country from '../../components/country';
export default class MainMenu extends React.Component {
  // constructor (props) {
  //   super(props);
  // };
  componentDidMount () {
    console.log('load');
  }
  render () {
    return (
      <div>
        <Header as='h1'>Countries</Header>
        <Divider />
        <Grid columns={ 4 }>
          <Grid.Row>
            <Grid.Column>
              <Country flag="https://www.countryflags.io/cr/flat/64.png" name="Costa Rica"
                continent="North America" capital="San José"
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
