import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Divider, Grid, Loader } from 'semantic-ui-react';
import Country from '../../components/country';
import Filter from '../../components/filter';
import { getContries, filterCountries } from '../../actions/country';
import { getFilterCountries } from '../../selectors';

class Home extends React.Component {
  componentDidMount () {
    !this.props.countries.length && this.props.getContries();
  }
  findCountries = (query) => {
    this.props.filterCountries(query);
  }
  render () {
    return (
      <div>
        <Header as='h2'>Countries</Header>
        <Filter findCountries={ this.findCountries } searchValue={ this.props.filter }/>
        <Divider />
        {
          this.props.isLoading
            ? <Loader active inline='centered' />
            : <Grid columns={ 4 }>
              <Grid.Row>
                {
                  this.props.countries.map((country) => {
                    return (<Grid.Column key={ country.countryCode } >
                      <Country flag={ `https://www.countryflags.io/${country.countryCode}/flat/64.png` }
                        name={ country.countryName } id={ country.countryCode }
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

const mapStateToProps = state => {
  return {
    countries: getFilterCountries(state),
    isLoading: state.country.isLoading,
    filter: state.country.filter,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getContries,
  filterCountries,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
