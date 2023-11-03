import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api'}),
    endpoints: (builder) => ({
        getContact: builder.query({
            query: (name) => `contacts`,
            providesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: (contact) => ({
                url: `contact`,
                method: 'POST',
                body: contact,

            }),
            async onQueryStarted(
                arg,
                {dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry}
            ) {
                await queryFulfilled;
                dispatch(contactApi.util.invalidateTags(['Contact']))
            },
        }),
    }),
})

export const {useGetContactQuery, useCreateContactMutation} = contactApi