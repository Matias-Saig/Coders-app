import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userContactsApi = createApi({
  reducerPath: "userContactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),

  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    
    updateContact: builder.mutation({
      query: (
        editContact
      ) => ({
        url: `/users/guest/contacts.json`,
        method: "PATCH",
        body: {
          editContact
        },
      }),
    }),

    getContact: builder.query({
      query: ( ) =>
      `/users/guest/contacts.json`,
    }),

    newContact: builder.mutation({
      query: (newContact ) => ({
        url: `/users/guest/contacts.json`,
        method: "POST",
        body: { newContact },
      }),
      invalidatesTags: ["contacts"],
    }),

    getContactList: builder.query({
      query: () => `/users/guest/contacts.json`,
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
