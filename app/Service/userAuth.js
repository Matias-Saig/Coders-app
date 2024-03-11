import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl } from "../../firebase/database";

export const userAuthApi = createApi({
    reducerPath:"userAuthApi",
    baseQuery:fetchBaseQuery({baseUrl:authUrl}),
    endpoints:(builder) => ({
        signUp:builder.mutation({
            query: (user) => ({
                url:`accounts:signUp?key=${apiKey}`,
                method:"POST",
                body:user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:"accounts:signInWithPassword?key=AIzaSyA2U21ILusl3jVe0oA7x1ejeNv7wAQ47jw",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useSignUpMutation,useLoginMutation} = userAuthApi 

