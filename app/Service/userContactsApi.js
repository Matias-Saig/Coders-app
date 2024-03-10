import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userContactsApi = createApi({
  reducerPath: "userContactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    
    updateContact: builder.mutation({
      query: ({
        user,
        contactId,
        contactName,
        contactNickname,
        contactAlias,
        contactCBU,
      }) => ({
        url: `/users/${user}/contacts/${contactId}.json`,
        method: "PATCH",
        body: {
          name: contactName,
          nickname: contactNickname,
          alias: contactAlias,
          cbu: contactCBU,
        },
      }),
    }),

    getContact: builder.query({
      query: ({ user, contactId }) =>
        `/users/${user}/contacts/${contactId}.json`,
    }),

    newContact: builder.mutation({
      query: ({ user, newContact }) => ({
        url: `/users/${user}/contacts.json`,
        method: "POST",
        body: { newContact },
      }),
      invalidatesTags: ["contacts"],
    }),

    getContactList: builder.query({
      query: (user) => `/users/${user}/contacts.json`,
      providesTags: ["contacts"],
    }),
  }),
});

export const {
  useUpdateContactMutation,
  useGetContactQuery,
  useNewContactMutation,
  useGetContactListQuery,
} = userContactsApi;
