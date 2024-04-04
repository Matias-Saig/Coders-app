import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userContactsApi = createApi({
  reducerPath: "userContactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    
    newContact: builder.mutation({
      query: ({userId,newContact} ) => ({
        url: `/users/${userId}/contacts.json`,
        method: "POST",
        body: { newContact },
      }),
      invalidatesTags: ["contacts"],
    }),

    deleteContact: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/contacts.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useNewContactMutation,
  useDeleteContactMutation
} = userContactsApi;
