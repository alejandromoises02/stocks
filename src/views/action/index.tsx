import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Divider, Button, FormHelperText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  useGetStockQuery,
  useLazyGetTimeSeriesQuery,
} from '../../store/service/StockService';
import useDateRangeOptions from '../../hooks/useDataStocks';
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
} from '../../utils/constants';
import { validateGraphInputs } from '../../utils';
import { IValidationResult } from '../../types';

const { DEFAULT_ERROR_FETCH } = MESSAGES;

const Action = () => {
  const [errorMessage, setErrorMessage] = useState<IValidationResult>({
    hasError: false,
    message: '',
  });
  const { values, actions } = useDateRangeOptions();
  const [
    trigger,
    {
      data: timeSeries,
      error: isTimeSeriesError,
      isLoading: isTimeSeriesLoading,
    },
  ] = useLazyGetTimeSeriesQuery();
  console.log({ timeSeries, isTimeSeriesError, isTimeSeriesLoading });

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

  const handleShowGraph = useCallback(() => {
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
  }, [symbol, trigger, values]);

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
              value={values.selectedValue}
              handleChange={actions.handleOptionChange}
              options={[
                { value: VALUES_TYPE_VIEW.realTime, label: 'Tiempo Real' },
                { value: VALUES_TYPE_VIEW.history, label: 'Histórico' },
              ]}
            />
          </ContentForm>

          {values.selectedValue === VALUES_TYPE_VIEW.history && (
            <ContentForm>
              <DateTimeRangePicker
                onChangeValues={actions.handleDateRangeChange}
              />
            </ContentForm>
          )}

          <ContentForm>
            <CustomSelect
              labelId={'select-interval-label'}
              id={'select-interval'}
              value={values.interval}
              label={'Intervalo'}
              handleChange={actions.handleIntervalChange}
              options={OPTIONS_INTERVAL}
            />
          </ContentForm>
        </LocalizationProvider>
        <Button variant="contained" color="primary" onClick={handleShowGraph}>
          Graficar
        </Button>
        {errorMessage.hasError && (
          <FormHelperText error>{errorMessage.message}</FormHelperText>
        )}
      </Container>
    </>
  );
};

export default Action;
