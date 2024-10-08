import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStockQuery } from '../../store/service/StockService';
import { Typography, Divider, SelectChangeEvent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import {
  ErrorMessage,
  LoadingSpinner,
  DateTimeRangePicker,
  CustomSelect,
  CustomRadioGroup,
} from '../../components/shared';
import { Container, ContentForm } from '../../styles';
import {
  MESSAGES,
  VALUES_TYPE_VIEW,
  OPTIONS_INTERVAL,
  DEFAULT_VALUE_INTERVAL,
} from '../../utils/constants';

const { DEFAULT_ERROR_FETCH } = MESSAGES;

const Action = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    VALUES_TYPE_VIEW.realTime,
  );
  const [dateRange, setDateRange] = useState<{
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  }>({
    fromDate: dayjs(),
    toDate: dayjs(),
  });
  console.log({ dateRange });

  const [interval, setInterval] = useState<string>(DEFAULT_VALUE_INTERVAL);
  const { symbol, exchange } = useParams<{
    symbol: string;
    exchange: string;
  }>();

  const {
    data: stock,
    isLoading,
    isError,
  } = useGetStockQuery({
    symbol,
    exchange,
  });

  const handleChangeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleIntervalChange = (event: SelectChangeEvent) => {
    setInterval(event.target.value as string);
  };

  const handleDateRangeChange = (values: {
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  }) => {
    setDateRange(values);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return <ErrorMessage message={stock?.message || DEFAULT_ERROR_FETCH} />;
  if (!stock) return <ErrorMessage message={DEFAULT_ERROR_FETCH} />;

  return (
    <>
      <Typography variant="subtitle1">
        {stock?.symbol} - {stock?.name} - {stock?.currency}
      </Typography>
      <Divider />

      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ContentForm>
            <CustomRadioGroup
              name={'radio-buttons-options'}
              value={selectedValue}
              handleChange={handleChangeOption}
              options={[
                { value: VALUES_TYPE_VIEW.realTime, label: 'Tiempo Real' },
                { value: VALUES_TYPE_VIEW.history, label: 'Histórico' },
              ]}
            />
          </ContentForm>

          {selectedValue === VALUES_TYPE_VIEW.history && (
            <ContentForm>
              <DateTimeRangePicker onChangeValues={handleDateRangeChange} />
            </ContentForm>
          )}

          {selectedValue === VALUES_TYPE_VIEW.realTime && (
            <ContentForm>
              <CustomSelect
                labelId={'select-interval-label'}
                id={'select-interval'}
                value={interval}
                label={'Intervalo'}
                handleChange={handleIntervalChange}
                options={OPTIONS_INTERVAL}
              />
            </ContentForm>
          )}
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default Action;
