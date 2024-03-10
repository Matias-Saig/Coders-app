import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userProfileApi = createApi({
    reducerPath: "userProfileApi",
    baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
    endpoints: (builder) => ({
        setProfile: builder.mutation({
            query: ({ user, userName, userEmail, userAlias, userPassword, userPicture }) => ({
                url: `/users/${user}/profile.json`,
                method: "PATCH",
                body: {
                    name: userName,
                    email: userEmail,
                    alias: userAlias,
                    password: userPassword,
                    picture: userPicture
                },
            }),
        }),

        getProfile: builder.query({
            query: (user) => `/users/${user}/profile.json`
        }),

    }),
});

export const { useGetProfileQuery, useSetProfileMutation } = userProfileApi;
