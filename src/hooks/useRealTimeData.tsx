import { useEffect, useRef, useCallback } from 'react';
import { VALUES_TYPE_VIEW, TIME_VALUE_OPTIONS } from '../utils/constants';
import { validateGraphInputs } from '../utils';
import { IUseRealTimeDataParams } from '../types';

const useRealTimeData = ({
  symbol,
  values,
  trigger,
  setErrorMessage,
}: IUseRealTimeDataParams) => {
  const intervalRef = useRef<number | null>(null);

  const handleShowGraph = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const errors = validateGraphInputs(values);
    if (errors.hasError) {
      setErrorMessage(errors);
      return;
    }
    setErrorMessage({ hasError: false, message: '' });

    const basePayload: {
      symbol: string | undefined;
      interval: string;
      start_date?: string;
      end_date?: string;
    } = {
      symbol,
      interval: values.interval,
    };

    if (values.selectedValue === VALUES_TYPE_VIEW.history) {
      basePayload.start_date = values.dateRange.fromDate?.toISOString();
      basePayload.end_date = values.dateRange.toDate?.toISOString();
    }
    trigger(basePayload);

    if (values.selectedValue === VALUES_TYPE_VIEW.realTime) {
      const intervalDuration = TIME_VALUE_OPTIONS[values.interval];

      intervalRef.current = setInterval(() => {
        trigger(basePayload);
      }, intervalDuration);
    }
  }, [symbol, trigger, values, setErrorMessage]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { handleShowGraph };
};

export default useRealTimeData;
