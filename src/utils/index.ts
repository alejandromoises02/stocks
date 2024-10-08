import dayjs from 'dayjs';
import { VALUES_TYPE_VIEW } from './constants';
import { IGraphInputValues, IValidationResult } from '../types';

export const validateGraphInputs = (
  values: IGraphInputValues,
): IValidationResult => {
  const { selectedValue, interval, dateRange } = values;

  if (!interval) {
    return {
      hasError: true,
      message: 'El intervalo no está asignado.',
    };
  }

  if (selectedValue === VALUES_TYPE_VIEW.realTime) {
    return {
      hasError: false,
      message: '',
    };
  }

  if (selectedValue === VALUES_TYPE_VIEW.history) {
    const { fromDate, toDate } = dateRange;
    if (
      !fromDate ||
      !toDate ||
      !dayjs(fromDate).isValid() ||
      !dayjs(toDate).isValid()
    ) {
      return {
        hasError: true,
        message: 'Las fechas de inicio y/o fin no son validas',
      };
    }
    if (dayjs(fromDate).isAfter(toDate)) {
      return {
        hasError: true,
        message: 'La fecha de inicio no puede ser posterior a la fecha de fin.',
      };
    }
    return {
      hasError: false,
      message: '',
    };
  }

  return {
    hasError: true,
    message: 'El tipo seleccionado no es válido.',
  };
};
