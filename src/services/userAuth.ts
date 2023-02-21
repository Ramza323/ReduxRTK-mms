// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/oauth2/v1/userinfo' }),
  endpoints: (builder) => ({
    getUserAuth: builder.query({
    query: (access_token) => ({
        url: ``,
        method: 'GET',
        params: { 'access_token': access_token},
        headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
        },
      }),
    }),
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserAuthQuery } = userApi