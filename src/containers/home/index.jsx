import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Divider, Grid, Loader } from 'semantic-ui-react';
import Country from '../../components/country';
import { getContries } from '../../actions/country';

class MainMenu extends React.Component {
  componentDidMount () {
    !this.props.countries.length && this.props.getContries();
  }
  render () {
    return (
      <div>
        <Header as='h2'>Countries</Header>
        <Divider />
        {
          this.props.isLoading
            ? <Loader active inline='centered' />
            : <Grid columns={ 4 }>
              <Grid.Row>
                {
                  this.props.countries.map((country) => {
                    return (<Grid.Column key={ country.countryCode } >
                      <Country flag={ `https://www.countryflags.io/${country.countryCode}/flat/64.png` } name={ country.countryName }
                        continent={ country.continentName } capital={ country.capital }
                      />
                    </Grid.Column>);
                  })

                }
              </Grid.Row>
            </Grid>
        }

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
