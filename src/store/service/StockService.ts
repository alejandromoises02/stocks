import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const twelvedataUrl = 'https://api.twelvedata.com';

export const stocksApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: twelvedataUrl,
  }),
  tagTypes: ['stocks'],
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => '/stocks',
      providesTags: ['stocks'],
    }),
  }),
});

export const { useGetStocksQuery } = stocksApi;
