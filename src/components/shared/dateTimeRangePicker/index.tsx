import { useCallback, useState } from 'react';
import { TimeView } from '@mui/x-date-pickers/models';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { IDateTimeRangePickerProps } from '../../../types';

const DateTimeRangePicker = ({ onChangeValues }: IDateTimeRangePickerProps) => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs());
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs());

  const shouldDisableDate = useCallback(
    (date: Dayjs) => {
      if (!fromDate) return false;
      return date.isBefore(fromDate.startOf('day'));
    },
    [fromDate],
  );

  const shouldDisableTime = useCallback(
    (value: Dayjs, view: TimeView) => {
      if (!fromDate) return false;
      const isSameDay = value.isSame(fromDate, 'day');
      if (isSameDay) {
        const fromHours = fromDate.hour();
        const fromMinutes = fromDate.minute();
        if (view === 'hours') {
          return value.hour() < fromHours;
        }
        if (view === 'minutes') {
          return value.minute() < fromMinutes && fromHours === value.hour();
        }
      }
      return false;
    },
    [fromDate],
  );

  const handleFromDateChange = useCallback(
    (newValue: Dayjs | null) => {
      setFromDate(newValue);
      onChangeValues({ fromDate: newValue, toDate });
    },
    [onChangeValues, toDate],
  );

  const handleToDateChange = useCallback(
    (newValue: Dayjs | null) => {
      setToDate(newValue);
      onChangeValues({ fromDate, toDate: newValue });
    },
    [fromDate, onChangeValues],
  );

  return (
    <>
      <DateTimePicker
        label="Fecha hora desde"
        value={fromDate}
        onChange={handleFromDateChange}
        disableFuture
      />

      <DateTimePicker
        label="Fecha hora hasta"
        value={toDate}
        onChange={handleToDateChange}
        disableFuture
        shouldDisableDate={shouldDisableDate}
        shouldDisableTime={shouldDisableTime}
      />
    </>
  );
};

export default DateTimeRangePicker;
