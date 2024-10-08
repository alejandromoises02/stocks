import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponse } from '../../types';

export const stocksApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/twelvedata',
  }),
  tagTypes: ['stocks', 'stock', 'timeSeries'],
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: ({ page, outputsize, name, symbol }) =>
        `/stocks?page=${page}&outputsize=${outputsize}&exchange=${name}&symbol=${symbol}`,
      providesTags: ['stocks'],
    }),

    getStock: builder.query({
      query: ({ symbol, exchange }) =>
        `/stocks?symbol=${symbol}&exchange=${exchange}`,
      providesTags: ['stock'],
      transformResponse: (res: IApiResponse) => res.data[0],
    }),

    getTimeSeries: builder.query({
      query: ({ symbol, interval, start_date, end_date }) => {
        const params = new URLSearchParams({ symbol });
        const optionalParams = { interval, start_date, end_date };
        Object.entries(optionalParams).forEach(([key, value]) => {
          if (value) {
            params.append(key, value);
          }
        });
        return `/time_series?${params.toString()}`;
      },
      providesTags: ['timeSeries'],
    }),
  }),
});

export const {
  useGetStocksQuery,
  useGetStockQuery,
  useLazyGetTimeSeriesQuery,
} = stocksApi;
