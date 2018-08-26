import { defineAction } from '../utils/defineAction';

export const CITY = defineAction(
  'CITY',
  ['GET_CITIES_REQUESTED', 'GET_CITIES']
);
