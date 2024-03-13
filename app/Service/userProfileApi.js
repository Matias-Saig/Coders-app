import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  endpoints: (builder) => ({
    setProfileImage: builder.mutation({
      query: ({
        localId,
        image       
      }) => ({
        url: `/${localId}/profile/image.json`,
        method: "PUT",
        body: {
          image
        },
      }),
    }),

    getProfileImage: builder.query({
      query: (localId) => `/${localId}/profile/image.json`,
    }),
  }),
});

export const { useGetProfileImageQuery, useSetProfileImageMutation } = userProfileApi;
