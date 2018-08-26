import { defineAction } from '../utils/defineAction';

export const HOLIDAY = defineAction(
  'HOLIDAY',
  ['GET_HOLIDAY_REQUESTED', 'GET_HOLIDAY']
);
