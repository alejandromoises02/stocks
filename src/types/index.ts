import { SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
export interface IPaginatedProps {
  count: number;
  onPageChange: (page: number) => void;
  page: number;
}

export interface ISearchProps {
  onSearch: (value: string, type: string) => void;
  title: string;
  type: string;
}

export interface IStock {
  currency: string;
  name: string;
  symbol: string;
  type: string;
  exchange: string;
}

export interface IOptions {
  value: string;
  label: string;
}

export interface IStockTableProps {
  data: IStock[];
}

export interface ISearchValues {
  name: string;
  symbol: string;
}

export interface IStock {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
  figi_code: string;
  message: string;
}

export interface IApiResponse {
  data: IStock[];
  count: number;
  status: string;
}

export interface ICustomSelectProps {
  labelId: string;
  id: string;
  value: string;
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  options: IOptions[];
}

export interface ICustomRadioGroupProps {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: IOptions[];
}

export interface IDateTimeRangePickerProps {
  onChangeValues: (values: {
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
  }) => void;
}

export type TDateRange = {
  fromDate: Dayjs | null;
  toDate: Dayjs | null;
};

export interface IValidationResult {
  hasError: boolean;
  message: string;
}

export type TIntervalOptions = '1min' | '5min' | '15min';
export interface IGraphInputValues {
  selectedValue: string;
  interval: TIntervalOptions;
  dateRange: TDateRange;
}

export interface IStockData {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface IStockChartProps {
  timeSeries: {
    status?: string;
    values?: IStockData[];
    message?: string;
  };
  title?: string;
  isError?: boolean;
  isLoading?: boolean;
}

export interface IUseRealTimeDataParams {
  symbol: string | undefined;
  values: IGraphInputValues;
  trigger: (payload: unknown) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<IValidationResult>>;
}
