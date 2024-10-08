import { useParams } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useGetStockQuery } from '../../store/service/StockService';
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

const { DEFAULT_ERROR_FETCH } = MESSAGES;

const Action = () => {
  const { values, actions } = useDateRangeOptions();

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

          {values.selectedValue === VALUES_TYPE_VIEW.realTime && (
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
          )}
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default Action;
