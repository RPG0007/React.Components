import { api } from './api';
interface SerchParams {
  limit: string;
  name_like: string;
}

export const CardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (getParams) => {
        const params = {} as SerchParams;

        if (getParams.pageParams) params.limit = getParams.pageParams;
        if (getParams.search) params.name_like = getParams.search;

        return {
          url: `/products/`,
          params,
        };
      },
    }),

    getCard: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (id) => [{ type: 'products', id }],
    }),
    // getTotalPages: builder.query({
    //   query: (totalCards) => `/info/?name_like=${totalCards}`,
    // }),
  }),
});

export const { useGetCardsQuery } = CardsApi;

export const { useGetCardQuery } = CardsApi;

// export const { useGetTotalPagesQuery } = CardsApi;
