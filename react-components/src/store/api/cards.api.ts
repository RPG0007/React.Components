import { api } from './api';
interface SerchParams {
  q: string;
}

export const CardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (getParams) => {
        const params = {} as SerchParams;
        if (getParams.search) {
          params.q = getParams.search;

          return {
            url: `/search?limit=8`,
            params,
          };
        }
        return {
          url: `/?limit=8&`,
          params,
        };
      },
    }),

    getCard: builder.query({
      query: (id) => `/${id}`,
    }),
    // getTotalPages: builder.query({
    //   query: (totalCards) => `/info/?name_like=${totalCards}`,
    // }),
  }),
});

export const { useGetCardsQuery } = CardsApi;

export const { useGetCardQuery } = CardsApi;

// export const { useGetTotalPagesQuery } = CardsApi;
