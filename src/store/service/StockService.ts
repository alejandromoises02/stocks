import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponse } from '../../types';

const twelvedataUrl = 'https://api.twelvedata.com';
const apiKey = 'cd298b575d864878924d2419895741ac';

export const stocksApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: twelvedataUrl,
  }),
  tagTypes: ['stocks', 'stock'],
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: ({ page, outputsize, name, symbol }) =>
        `/stocks?page=${page}&outputsize=${outputsize}&exchange=${name}&symbol=${symbol}&apikey=${apiKey}&source=docs`,
      providesTags: ['stocks'],
    }),
    getStock: builder.query({
      query: ({ symbol, exchange }) =>
        `/stocks?symbol=${symbol}&exchange=${exchange}&apikey=${apiKey}&source=docs`,
      providesTags: ['stock'],
      transformResponse: (res: IApiResponse) => res.data[0],
    }),
  }),
});

export const { useGetStocksQuery, useGetStockQuery } = stocksApi;
