import { configureStore } from '@reduxjs/toolkit'
import {contactApi} from "./apiSlice";

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactApi.middleware),
})
