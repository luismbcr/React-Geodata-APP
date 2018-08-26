import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Divider, Loader } from 'semantic-ui-react';
import { getContries } from '../../actions/country';
import { getCities } from '../../actions/city';
import { getHolidays } from '../../actions/holiday';
import Summary from '../../components/summary';

class Country extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      country: {},
    };
  }
  componentDidMount () {
    const id = this.props.match.params.cc.toLowerCase();
    if (!this.props.countries.length) {
      this.props.getContries().then(
        () => {
          const country = this.props.countries.filter((item) => item.countryCode.toLowerCase() === id);
          this.setState({country: country[0]});
        }
      );
    } else {
      const country = this.props.countries.filter((item) => item.countryCode.toLowerCase() === id);
      this.setState({country: country[0]});
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.country !== prevState.country) {
      const { north, south, east, west, countryCode } = this.state.country;
      this.props.getCities(north, south, east, west);
      this.props.getHolidays(countryCode);
    }
  }
  render () {
    return (
      <div>
        <Header as='h2'>{!this.props.countriesLoading && this.state.country.countryName}</Header>
        <Divider />
        {
          this.props.countriesLoading
            ? <Loader active inline='centered' />
            : <Summary country={ this.state.country } citiesLoading={ this.props.citiesLoading }
              cities={ this.props.cities } holidaysLoading={ this.props.holidaysLoading }
              holidays={ this.props.holidays } />
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.country.countries,
  countriesLoading: state.country.isLoading,
  cities: state.city.cities,
  citiesLoading: state.city.isLoading,
  holidays: state.holiday.holidays,
  holidaysLoading: state.holiday.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContries,
  getCities,
  getHolidays,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
