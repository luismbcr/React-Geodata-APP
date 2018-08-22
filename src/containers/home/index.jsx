import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Divider, Grid, Loader } from 'semantic-ui-react';
import Country from '../../components/country';
import { getContries } from '../../actions/country';

class MainMenu extends React.Component {
  // constructor (props) {
  //   super(props);
  // };
  componentDidMount () {
    this.props.getContries();
  }
  render () {
    return (
      <div>
        <Header as='h1'>Countries</Header>
        <Divider />
        {this.props.isLoading ? <Loader active inline='centered' /> : ' ' }
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

const mapStateToProps = state => ({
  countries: state.country.countries,
  isLoading: state.country.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContries,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
