import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: ['GET'],
        }),
        createContact: builder.mutation({
            query: (contact) => ({
                url: `contact`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['GET']
        }),
    }),
})

export const { useGetContactsQuery, useCreateContactMutation } = contactApi;