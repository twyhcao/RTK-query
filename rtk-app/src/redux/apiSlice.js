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
            onQueryStarted: async (contact, { dispatch }) => {
                dispatch(contactApi.util.updateQueryData('getContacts', undefined, (draftContacts) => {
                    const tempId = Date.now().toString();
                    const newContact = { ...contact, id: tempId, status: "SAVING" };

                    draftContacts?.push(newContact);
                }));
            },
            invalidatesTags: ['GET']
        }),
    }),
})

export const { useGetContactsQuery, useCreateContactMutation } = contactApi;