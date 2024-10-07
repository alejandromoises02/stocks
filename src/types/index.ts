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
  mic_code: string;
}

export interface IStockTableProps {
  data: IStock[];
}

export interface ISearchValues {
  name: string;
  symbol: string;
}
