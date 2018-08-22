import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Divider, Loader } from 'semantic-ui-react';
import { getContries } from '../../actions/country';
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
  render () {
    return (
      <div>
        <Header as='h2'>{!this.props.isLoading && this.state.country.countryName}</Header>
        <Divider />
        {
          this.props.isLoading
            ? <Loader active inline='centered' />
            : <Summary country={ this.state.country }/>
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
)(Country);
