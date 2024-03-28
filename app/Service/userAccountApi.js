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

    // create init user
    createUser: builder.mutation({
      query: ({newUserId, userName, userEmail, userAlias} ) => ({
        url: `/users/${newUserId}.json`,
        method: "PATCH",
        body: {
          balance: 200000,
          contacts: [
            {
              alias: "alias.muestra",
              bank: "Banco.muestra",
              cbu: "0123456789",
              id: 1,
              name: "nombre y apellido",
              nickname: "apodo",
            },
          ],
          movements: [
            {
              cashFlow: "in",
              category: "categoria",
              date: "01/nov/23",
              detail: "detalle de ingreso",
              value: 100,
            },
            {
              cashFlow: "out",
              category: "categoria",
              date: "02/dic/23",
              detail: "detalle de salida",
              value: 100,
            },
          ],
          profile: {
            CVU: "123456789",
            alias: `${userAlias}.classicpocket`,
            email: userEmail,
            name: userName,
            password: "***********",
            image: "data:image/jpeg;base64",
          },
        },
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}.json`,
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

export const { useGetUserQuery, useCreateUserMutation, useDeleteUserMutation } =
  userAccountApi;
