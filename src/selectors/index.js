import { createSelector } from 'reselect';

const getCountriesFilter = state => state.country.filter;
const getCountries = state => state.country.countries;

export const getFilterCountries = createSelector(
  [getCountriesFilter, getCountries],
  (filter, countries) => countries.filter(item => item.countryName.toLowerCase().indexOf(filter) > -1)
);
