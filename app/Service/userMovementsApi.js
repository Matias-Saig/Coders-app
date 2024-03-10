import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userMovementsApi = createApi({
  reducerPath: "userMovementesApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  tagTypes: ["movements"],
  endpoints: (builder) => ({
    getMovements: builder.query({
      query: (user) => `/users/${user}/movements.json`,
      providesTags: ["movements"],
    }),

    updateMovements: builder.mutation({
      query: ({ user, newMovement }) => ({
        url: `/users/${user}/movements.json`,
        method: "POST",
        body: {
          newMovement,
        },
      }),
      invalidatesTags: ["movements"],
    }),
  }),
});

export const { useGetMovementsQuery, useUpdateMovementsMutation } = userMovementsApi;
