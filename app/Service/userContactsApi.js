import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userContactsApi = createApi({
  reducerPath: "userContactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (userId) => `/users/${userId}/contacts.json`,
      providesTags: ["contacts"],
    }),

    newContact: builder.mutation({
      /* query: ({ userId, newContact, idx }) => ({
        url: `/users/${userId}/contacts.json`,
        method: "PATCH",
        body:  newContact ,
      }), */
      query: ({ userId, newContact, idx }) => ({
        url: `/users/${userId}/contacts/${idx}.json`,
        method: "PATCH",
        body:  newContact ,
      }),
      invalidatesTags: ["contacts"],
    }),

    deleteContact: builder.mutation({
      query: ({ userId, contactIndex }) => ({
        url: `/users/${userId}/contacts/${contactIndex}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useNewContactMutation,
  useDeleteContactMutation,
} = userContactsApi;
