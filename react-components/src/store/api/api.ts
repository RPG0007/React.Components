import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://dummyjson.com/';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});
