import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { firebaseUrl } from '../../firebase/database'

export const userProfileApi = createApi({
    reducerPath:"userProfileApi",
    baseQuery:fetchBaseQuery({baseUrl:firebaseUrl}),
    endpoints:(builder)=>({
        putImage: builder.mutation({
            query:({image,localId})=>({
                url:`/profile/${localId}.json`,
                method:"PUT",
                body:{image}
            })
        }),
        getImage: builder.query({
            query:(localId) => `/profile/${localId}.json`
        }),

    })
})

export const {  usePutImageMutation,
                useGetImageQuery,
                usePutUserLocationMutation,
                useGetUserLocationQuery
            } = userProfileApi


