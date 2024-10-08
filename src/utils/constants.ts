import { TIntervalOptions } from '../types';

export const MESSAGES = {
  DEFAULT_ERROR_FETCH: 'Error al obtener los datos',
};

export const DEFAULT_OUTPUT_SIZE = 30;

export const VALUES_TYPE_VIEW = {
  realTime: 'realTime',
  history: 'history',
};

export const OPTIONS_INTERVAL = [
  { value: '1min', label: '1min' },
  { value: '5min', label: '5min' },
  { value: '15min', label: '15min' },
];

export const DEFAULT_VALUE_INTERVAL = OPTIONS_INTERVAL[0]
  .value as TIntervalOptions;

export const TIME_VALUE_OPTIONS = {
  '1min': 60000,
  '5min': 300000,
  '15min': 900000,
};
