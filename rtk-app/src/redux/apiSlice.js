import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api' }),
    tagTypes: ['GET', 'POST'],
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
            onQueryStarted: async (contact, { dispatch, queryFulfilled }) => {
                // Do something when the query starts (in this example we're adding our new contact to the cache)
                dispatch(contactApi.util.updateQueryData("getContacts", undefined, (draftContacts) => {
                    const tempId = Date.now().toString();
                    const newContact = { ...contact, id: tempId, status: "SAVING" };

                    draftContacts?.push(newContact);
                }));

                try {
                    await queryFulfilled;
                    // Do something when the query succeeds
                } catch {
                    // Do something when the query fails
                }
            },
            invalidatesTags: ['GET']
        }),
    }),
})

export const { useGetContactsQuery, useLazyGetContactsQuery, useCreateContactMutation } = contactApi;