import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
      query: ({ mic_code }) =>
        `/stocks?mic_code=${mic_code}&apikey=${apiKey}&source=docs`,
      providesTags: ['stock'],
    }),
  }),
});

export const { useGetStocksQuery, useGetStockQuery } = stocksApi;
