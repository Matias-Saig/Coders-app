import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userBalanceApi = createApi({
  reducerPath: "userBalanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  endpoints: (builder) => ({
    getBalance: builder.query({
      query: (user) => `/users/${user}/balance.json`,
    }),

    updateBalance: builder.mutation({
      query: ({ user, newBalance }) => ({
        url: `/users/${user}/balance.json`,
        method: "PUT",
        body: {
          newBalance,
        },
      }),
    }),
  }),
});

export const { useGetBalanceQuery, useUpdateBalanceMutation } = userBalanceApi;
