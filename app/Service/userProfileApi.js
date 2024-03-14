import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  tagTypes: ["profile"],
  endpoints: (builder) => ({
    setProfileImage: builder.mutation({
      query: ({
        localId,
        image       
      }) => ({
        url: `/${localId}/profile.json`,
        method: "PUT",
        body: {
          image
        },
      }),
    }),

    getProfileImage: builder.query({
      query: (localId) => `/${localId}/profile.json`,
      providesTags: ["profile"],

    }),
  }),
});

export const { useGetProfileImageQuery, useSetProfileImageMutation } = userProfileApi;
