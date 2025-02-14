import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (payload) => ({
        url: '/orders',
        method: 'POST',
        body: payload,
      }),
    }),
    getProducts: builder.query({
        query: () => "/cars",
      }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    filterProduct: builder.query({
      query: (searchTerm) => {
        console.log("Filter Product Query - searchTerm:", searchTerm); // Log searchTerm here
    
        return {
          url: "/cars",
          params: searchTerm ,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useCreateOrderMutation, useVerifyOrderQuery, useFilterProductQuery } = productApi;