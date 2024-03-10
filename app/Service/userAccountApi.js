import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  endpoints: (builder) => ({
    
    getUser: builder.query({
      query: (user) => `/users/${user}.json`,
    }), 
    getUsersList: builder.query({
      query:() => `/users.json`,
      transformResponse:(response)=>{
          const data = Object.keys(response)
          return data
    }})
  }),
});

export const { useGetUserQuery, useGetUsersListQuery } = userAccountApi;
