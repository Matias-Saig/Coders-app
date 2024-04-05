import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    setProfileImage: builder.mutation({
      query: ({
        localId,
        image       
      }) => ({
        url: `/users/${localId}/profile/image.json`,
        method: "PUT",
        body: {
          image
        },
      }),
      invalidatesTags: ["image"],

    }),

    getProfileImage: builder.query({
      query: (localId) => `/users/${localId}/profile/image.json`,
      providesTags: ["image"],

    }),
  }),
});

export const { useGetProfileImageQuery, useSetProfileImageMutation } = userProfileApi;
