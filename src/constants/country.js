import { defineAction } from '../utils/defineAction';

export const COUNTRY = defineAction(
  'COUNTRY',
  ['GET_COUNTRIES_REQUESTED', 'GET_COUNTRIES', 'FILTER_COUNTRIES']
);
