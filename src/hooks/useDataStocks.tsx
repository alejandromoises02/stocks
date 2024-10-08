import { useState, useCallback } from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { SelectChangeEvent } from '@mui/material';
import { VALUES_TYPE_VIEW, DEFAULT_VALUE_INTERVAL } from '../utils/constants';
import { TIntervalOptions } from '../types';

const useDateRangeOptions = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    VALUES_TYPE_VIEW.realTime,
  );
  const [interval, setInterval] = useState<TIntervalOptions>(
    DEFAULT_VALUE_INTERVAL,
  );
  const [dateRange, setDateRange] = useState<{
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  }>({
    fromDate: dayjs(),
    toDate: dayjs(),
  });

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    },
    [],
  );

  const handleIntervalChange = useCallback((event: SelectChangeEvent) => {
    setInterval(event.target.value as TIntervalOptions);
  }, []);

  const handleDateRangeChange = useCallback(
    (values: { fromDate: Dayjs | null; toDate: Dayjs | null }) => {
      setDateRange(values);
    },
    [],
  );

  return {
    values: {
      interval,
      dateRange,
      selectedValue,
    },
    actions: {
      handleOptionChange,
      handleIntervalChange,
      handleDateRangeChange,
    },
  };
};

export default useDateRangeOptions;
