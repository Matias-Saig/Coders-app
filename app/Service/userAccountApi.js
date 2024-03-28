import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  tagTypes: ["users"],

  endpoints: (builder) => ({
    
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: ["users"],
    }),

    createUser: builder.mutation({
      query: ({newUserId, newUser}) => ({
        url: `/users/${newUserId}`,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["users"],
    }),

//    triggerProfileImage({ localId, image });


    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

  }),
});

/* 
    updateTask: builder.mutation({
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
 */
 

export const { useGetUserQuery, useCreateUserMutation, useDeleteUserMutation } = userAccountApi;
