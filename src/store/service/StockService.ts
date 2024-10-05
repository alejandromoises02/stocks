import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const twelvedataUrl = 'https://api.twelvedata.com';
const apiKey = 'cd298b575d864878924d2419895741ac';

export const stocksApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: twelvedataUrl,
  }),
  tagTypes: ['stocks'],
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: ({ page, outputsize }) =>
        `/stocks?page=${page}&outputsize=${outputsize}&apikey=${apiKey}`,
      providesTags: ['stocks'],
    }),
  }),
});

export const { useGetStocksQuery } = stocksApi;
